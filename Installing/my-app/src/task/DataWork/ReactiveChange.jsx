import { useState } from 'react'

//Дан массив с числами. Выведите его в виде списка ul. По клику на любую li возведите ее число в квадрат.

//В конце каждой li сделайте кнопку, по нажатию на которую эта li будет удаляться из списка.

function ReactiveChange() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [isInput, setIsInput] = useState('')
	const [target, setTarget] = useState()

	function changeHandler(value, index) {
		setNotes(pref => pref.map((note, i) => (i === index ? value : note)))
	}

	const btnReverse = (
		<button
			style={{ marginRight: 10 }}
			onClick={() => {
				setNotes(pref => [...pref].reverse())
			}}
		>
			reverse
		</button>
	)

	const input = (
		<input
			value={isInput}
			onChange={event => {
				setIsInput(event.target.value)
			}}
			onBlur={event => {
				changeHandler(event.target.value, target)
				setTarget()
				setIsInput('')
			}}
		/>
	)

	const lists = notes.map((value, index) => {
		return (
			<li
				style={{ listStyle: 'none' }}
				key={index}
				onClick={event => {
					// changeHandler(value + '!', index)
					setTarget(index)
					setIsInput(value)
				}}
			>
				{value}
				<button
					style={{ marginLeft: 10 }}
					onClick={event => {
						event.stopPropagation()
						setNotes(pref => [
							...pref.slice(0, index),
							...pref.slice(index + 1),
						])
					}}
				>
					del
				</button>
			</li>
		)
	})

	return (
		<div>
			<h2>Реактивные операции над массивами</h2>
			{btnReverse}
			{input}
			<ul>{lists}</ul>
		</div>
	)
}

export default ReactiveChange
