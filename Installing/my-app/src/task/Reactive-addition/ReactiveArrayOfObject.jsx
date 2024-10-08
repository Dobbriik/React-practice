import { useId, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

//Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.

//Сделайте три инпута и кнопку. По нажатию на кнопку из данных инпута создайте новую li в конце тега ul.

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

function ReactiveArrayOfObject() {
	const [notes, setNotes] = useState(initNotes)
	const [isInputs, setIsInputs] = useState({
		id: uuidv4(),
		prop1: '',
		prop2: '',
		prop3: '',
	})

	const inputs = (
		<div>
			<input
				className='border-2 border-black rounded-md  my-2 mr-2 rad'
				value={isInputs.prop1}
				onChange={event => {
					setIsInputs(pref => ({ ...pref, prop1: event.target.value }))
				}}
			/>
			<input
				className='border-2 border-black rounded-md  my-2 mr-2 rad'
				value={isInputs.prop2}
				onChange={event => {
					setIsInputs(pref => ({ ...pref, prop2: event.target.value }))
				}}
			/>
			<input
				className='border-2 border-black rounded-md  my-2 mr-2 rad'
				value={isInputs.prop3}
				onChange={event => {
					setIsInputs(pref => ({ ...pref, prop3: event.target.value }))
				}}
			/>
		</div>
	)

	const result = notes.map((note, index) => {
		return (
			<li className='flex flex-col' key={note.id}>
				<span>{note.prop1}</span>
				<span>{note.prop2}</span>
				<span>{note.prop3}</span>
				<button
					className='border-2 border-black rounded-md  my-2 mr-2 rad'
					onClick={() => {
						setNotes(pref => [...pref].filter((elem, i) => i !== index))
					}}
				>
					del
				</button>
			</li>
		)
	})

	const btnAdd = (
		<button
			className='border-2 border-black rounded-md  my-2 mr-2 rad'
			onClick={() => {
				setNotes(pref => {
					return [...pref, ...[{ ...isInputs, ['id']: uuidv4() }]]
				})
				setIsInputs(pref => ({ ...pref, prop1: '', prop2: '', prop3: '' }))
				console.log(notes)
			}}
		>
			add
		</button>
	)

	return (
		<div>
			<h2 className='text-2xl mar my-5'>
				Реактивное добавление в массив объектов
			</h2>
			{btnAdd}
			{inputs}
			<ul className='flex flex-row gap-5'>{result}</ul>
		</div>
	)
}

export default ReactiveArrayOfObject
