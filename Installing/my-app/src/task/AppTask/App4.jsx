import { useState } from 'react'

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

export default App4
