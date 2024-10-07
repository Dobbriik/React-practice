import { useState } from 'react'

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

export default App1
