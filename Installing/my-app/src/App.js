import React, { useState } from 'react'

//Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац.

function App1() {
	const [value1, setValue1] = useState('')
	const [value2, setValue2] = useState('')

	const [result, setResult] = useState('')
	return (
		<div>
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
			<button
				onClick={() => {
					setResult(Number(value1) + Number(value2))
				}}
			>
				add up
			</button>
			<button
				onClick={() => {
					setResult(Number(value1) * Number(value2))
				}}
			>
				multiply
			</button>
			<p>{result}</p>
		</div>
	)
}

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

//Работа с textarea в React
function App3() {
	const [value, setValue] = useState('')

	return (
		<div>
			<textarea
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<p>{value}</p>
		</div>
	)
}

//Работа с чекбоксами в React
function App4() {
	const [checked, setChecked] = useState(true)

	return (
		<div>
			<input
				type='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
		</div>
	)
}

//С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.

function App() {
	const [checkbox1, setChecked1] = useState(false)
	const [checkbox2, setChecked2] = useState(false)
	const [checkbox3, setChecked3] = useState(false)
	return (
		<div>
			<input
				type='checkbox'
				checked={checkbox1}
				onClick={() => setChecked1(!checkbox1)}
			/>
			<span>html</span>
			<br />
			<input
				type='checkbox'
				checked={checkbox2}
				onClick={() => setChecked2(!checkbox2)}
			/>
			<span>css</span>
			<br />
			<input
				type='checkbox'
				checked={checkbox3}
				onClick={() => setChecked3(!checkbox3)}
			/>
			<span>js</span>

			<p>html:{checkbox1 ? ' знаю' : ' не знаю'}</p>
			<p>css:{checkbox2 ? ' знаю' : ' не знаю'}</p>
			<p>js:{checkbox3 ? ' знаю' : ' не знаю'}</p>
		</div>
	)
}

export default App
