import { useState } from 'react'

//Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.
//Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты.
const initDate = {
	year: 2025,
	month: 12,
	day: 31,
}
function BindingInputsToObject() {
	const [isDate, setIsDate] = useState(initDate)
	const itDate = new Date(isDate.year, isDate.month - 1, isDate.day)
	const year = itDate.getFullYear()
	const month = itDate.getMonth() + 1
	const day = itDate.getDate()
	const weekDay = itDate.getDay() + 1

	const dateArr = Object.keys(isDate)

	function changeHandler(key, event) {
		// setIsDate({ ...isDate, [key]: event.target.value })
		setIsDate(pref => ({ ...pref, [key]: event.target.value }))
	}

	const inputs = dateArr.map((key, index) => {
		return (
			<input
				key={index}
				value={isDate[key]}
				onChange={event => {
					changeHandler(key, event)
				}}
			></input>
		)
	})

	return (
		<div>
			<h2>Привязка инпутов к объекту</h2>
			<div>{inputs}</div>
			<p>
				Год:{year} Месяц:{month} День{day} : День недели{weekDay}
			</p>
		</div>
	)
}

export default BindingInputsToObject
