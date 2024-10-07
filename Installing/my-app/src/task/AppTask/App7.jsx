import { useState } from 'react'

//Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его.

function App7() {
	const [checkbox, setChecked] = useState(false)

	return (
		<div>
			<input
				type='checkbox'
				value={checkbox}
				onClick={() => {
					setChecked(!checkbox)
				}}
			/>
			{checkbox ? <p>Привет</p> : <p>Пока</p>}
		</div>
	)
}

export default App7
