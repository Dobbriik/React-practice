import { useState } from 'react'

//Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода:

function App6() {
	const [checkbox, setChecked] = useState(false)
	const adult = (
		<div>
			<p>Вам есть 18!</p>
			<img src='image.png' alt='img' style={{ width: 200 }}></img>
		</div>
	)

	const minor = (
		<div>
			<p>Вам ещё нету 18!</p>
		</div>
	)

	return (
		<div>
			<span>Вам есть 18?</span>
			<input
				type='checkbox'
				value={checkbox}
				onClick={() => {
					setChecked(!checkbox)
				}}
			/>
			{checkbox ? adult : minor}
		</div>
	)
}

export default App6
