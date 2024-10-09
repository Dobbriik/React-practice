import { nanoid } from 'nanoid'
import { useState } from 'react'

//В конце каждого абзаца сделайте кнопку, по нажатию на которую будет показываться полное описание продукта.

const initNotes = [
	{
		id: nanoid(),
		name: 'name1',
		desc: 'long description 1',
		show: false,
	},
	{
		id: nanoid(),
		name: 'name2',
		desc: 'long description 2',
		show: false,
	},
	{
		id: nanoid(),
		name: 'name3',
		desc: 'long description 3',
		show: false,
	},
]

function DataDisplay() {
	const [isNotes, setIsNOtes] = useState(initNotes)

	const par = isNotes.map((e, i) => {
		return (
			<p key={e.id}>
				{e.name}
				<i className='mx-3'>{e.show && e.desc}</i>
				<button
					className='ml-3  bg-green-500 rounded-md py-1 px-3'
					onClick={() => {
						setIsNOtes(pref => {
							const show = [...pref].map((elem, i) => {
								if (e.id !== elem.id) {
									return elem
								} else {
									const copy = { ...elem }
									copy.show = !copy.show
									return copy
								}
							})
							console.log(show)
							return show
						})
					}}
				>
					{!e.show ? 'show desc' : 'hide'}
				</button>
			</p>
		)
	})

	return (
		<div>
			<p className='text-xl my-5'>Реактивный показ данных</p>
			{par}
		</div>
	)
}

export default DataDisplay
