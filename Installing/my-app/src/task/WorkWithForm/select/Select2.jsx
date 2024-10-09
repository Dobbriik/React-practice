import { useState } from 'react'

//С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.

function Select2() {
	const [value, setValue] = useState('')

	return (
		<div>
			<select value={value} onChange={event => setValue(event.target.value)}>
				<option value='1'>от 0 до 12 лет</option>
				<option value='2'>от 13 до 17</option>
				<option value='3'>от 18 до 25</option>
				<option value='4'>старше 25 лет</option>
			</select>
			<p>
				{value === '1' && 'Вы ребёнок'}
				{value === '2' && 'Вы подросток'}
				{value === '3' && 'Вы взрослый'}
				{value === '4' && 'Вы старый'}
			</p>
		</div>
	)
}

export default Select2
