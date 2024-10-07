import { useState } from 'react'
import style from './Wrappers.module.css'

function BindingInputs() {
	const [notes, setNotes] = useState([1, 2, 3, 4])

	function changeHandler(event, index) {
		const value = event.target.value
		setNotes(pref => {
			return [...pref.slice(0, index), value, ...pref.slice(index + 1)]
		})
	}
	function getArithmeticMean(arr) {
		const array = [...arr]
		let sum = 0

		for (let i = 0; i < array.length; i++) {
			sum += array[i]
		}
		console.log(sum)
		console.log(array.length)
		const result = sum / array.length

		return result
	}

	const inputs = notes.map((value, index) => {
		return (
			<input
				key={index}
				value={value}
				onChange={event => {
					changeHandler(event, index)
				}}
			/>
		)
	})

	return (
		<div className={style.wrapper}>
			<h2>Привязка инпутов к массиву</h2>
			{inputs} <p>{getArithmeticMean(notes)}</p>{' '}
		</div>
	)
}

export default BindingInputs
