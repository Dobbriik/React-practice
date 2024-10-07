import { useState } from 'react'

//С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.

function App5() {
	const [checkbox1, setChecked1] = useState(false)
	const [checkbox2, setChecked2] = useState(false)
	const [checkbox3, setChecked3] = useState(false)
	return (
		<div>
			<input
				type='checkbox'
				checked={checkbox1}
				onChange={() => setChecked1(!checkbox1)}
			/>
			<span>html</span>
			<br />
			<input
				type='checkbox'
				checked={checkbox2}
				onChange={() => setChecked2(!checkbox2)}
			/>
			<span>css</span>
			<br />
			<input
				type='checkbox'
				checked={checkbox3}
				onChange={() => setChecked3(!checkbox3)}
			/>
			<span>js</span>

			<p>html:{checkbox1 ? ' знаю' : ' не знаю'}</p>
			<p>css:{checkbox2 ? ' знаю' : ' не знаю'}</p>
			<p>js:{checkbox3 ? ' знаю' : ' не знаю'}</p>
		</div>
	)
}

export default App5
