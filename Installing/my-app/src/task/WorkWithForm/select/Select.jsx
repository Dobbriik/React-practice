import { useState } from 'react'

//Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя.

//Пусть в массиве хранится список городов. Выведите с помощью цикла выпадающий список этих городов.

function Select() {
	const [city, setCity] = useState('')

	const cities = [
		'Москва',
		'Санкт-Петербург',
		'Новосибирск',
		'Екатеринбург',
		'Нижний Новгород',
		'Казань',
		'Самара',
		'Омск',
		'Челябинск',
		'Ростов-на-Дону',
	]

	const options = cities.map((cityn, index) => {
		return <option key={index}>{cityn}</option>
	})

	return (
		<>
			<h2>Select</h2>{' '}
			<select
				value={city}
				onChange={event => {
					setCity(event.target.value)
				}}
			>
				{options}
			</select>
			<p>{city}</p>
		</>
	)
}

export default Select
