import { useState } from 'react'

//Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.

//Сделайте инпут и кнопку. По нажатию на кнопку пусть текст инпута станет новым тегом li в конец тега ul.

function ReactiveAddition() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [isInput, setIsInput] = useState('')
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>
	})

	function changeHandler(value) {
		setNotes(pref => [...pref, value])
	}

	return (
		<div>
			<h2>Реактивное добавление в массив</h2>
			<button
				onClick={() => {
					changeHandler(notes.length + 1)
				}}
			>
				add
			</button>

			<input
				value={isInput}
				onChange={event => setIsInput(event.target.value)}
			/>
			<button
				onClick={() => {
					changeHandler(isInput)
				}}
			>
				Add
			</button>

			<ul>{result}</ul>
		</div>
	)
}

export default ReactiveAddition
