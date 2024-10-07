import { useState } from 'react'

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

export default App3
