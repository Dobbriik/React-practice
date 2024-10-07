import { useState } from 'react'

//Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.

//Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата.

function App2() {
	const date = new Date()
	function formatDate(date) {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')

		return `${year}-${month}-${day}`
	}
	const [value1, setValue1] = useState(formatDate(date))
	const [value2, setValue2] = useState(formatDate(date))
	const [result, setResult] = useState('')
	function getResult() {
		const data1 = new Date(value1)
		const data2 = new Date(value2)

		let raz = data2 - data1
		const result = raz / (1000 * 60 * 60 * 24)
		setResult(result)
	}
	return (
		<>
			<input
				value={value1}
				onChange={event => {
					setValue1(event.target.value)
				}}
			/>
			<input
				value={value2}
				onChange={event => {
					setValue2(event.target.value)
				}}
			/>
			<button onClick={getResult}>result</button>
			<p>{result}</p>
		</>
	)
}

export default App2
