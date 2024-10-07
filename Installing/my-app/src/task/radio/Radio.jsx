import { useState } from 'react'

function Radio() {
	const [isRadio, setIsRadio] = useState()

	function changeHandler(event) {
		setIsRadio(event.target.value)
	}
	const numbers = [0, 1, 2]
	const progLanguages = ['Java Script', 'Java', 'php']
	const inputs = numbers.map((num, index) => {
		return (
			<div key={index}>
				<input
					type='radio'
					name='radio'
					value={num}
					checked={isRadio === `${{ num }}` ? true : false}
					onChange={changeHandler}
				/>
				<span>{progLanguages[index]}</span>
			</div>
		)
	})

	return (
		<>
			<h2>Radio</h2>
			{inputs}
			<p>
				{isRadio === 0
					? 'Вы молодец!'
					: progLanguages[isRadio]
					? `Вы выбрали ${progLanguages[isRadio]}`
					: 'Выберете язык'}
			</p>
		</>
	)
}

export default Radio
