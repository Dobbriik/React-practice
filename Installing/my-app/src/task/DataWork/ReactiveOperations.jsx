import { useState } from 'react'

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
]

//В конце каждой li сделайте кнопку, по нажатию на которую эта li будет удаляться из списка.

function ReactiveOperations() {
	const [dates, setDates] = useState(initNotes)
	const [isInputs, setIsInputs] = useState(['', '', ''])

	const [target, setTarget] = useState('')

	const inputs = isInputs.map((elem, index) => {
		return (
			<input
				className='mb-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				placeholder={'№' + index}
				key={index}
				value={elem}
				onChange={event => {
					setIsInputs(pref =>
						[...pref].map((e, i) => (i === index ? event.target.value : e))
					)
				}}
			/>
		)
	})

	const btnChange = (
		<button
			className='mb-2  bg-green-500 rounded-md py-1 px-3'
			onClick={() => {
				if (!target) return
				setDates(pref => {
					const idElem = [...pref].filter((e, i) => e.id === target)
					for (let i = 0; i < isInputs.length; i++) {
						idElem[0][`prop${i + 1}`] = isInputs[i]
					}
					const withoutOne = [...pref].filter((e, i) => e.id !== target)
					setIsInputs(['', '', ''])
					setTarget('')
					return [...withoutOne, ...idElem]
				})
			}}
		>
			change
		</button>
	)

	const list = dates.map((elem, index) => {
		return (
			<li key={elem.id} className='mb-3 '>
				<span>{elem.prop1}</span>
				<span>{elem.prop2}</span>
				<span>{elem.prop3}</span>
				<button
					className='ml-3  bg-green-500 rounded-md py-1 px-3'
					onClick={() => {
						setDates(prop => {
							return [...prop].filter((elem, i) => i === index)
						})
					}}
				>
					delete
				</button>

				<button
					className='ml-3  bg-green-500 rounded-md py-1 px-3'
					onClick={() => {
						setTarget(elem.id)
						setIsInputs(pref => {
							return [...pref].map((e, i) => {
								return elem[`prop${i + 1}`]
							})
						})
					}}
				>
					change
				</button>
			</li>
		)
	})

	return (
		<div>
			<h2 className='text-xl my-5'>
				Реактивные операции над массивами объектов
			</h2>
			<div className='flex  gap-5 items-start'>
				<div>{inputs}</div>
				{btnChange}
			</div>
			<ul>{list}</ul>
		</div>
	)
}

export default ReactiveOperations
