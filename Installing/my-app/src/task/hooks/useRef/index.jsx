import { useRef, useState } from 'react'

function RefComponent() {
	const [text, setText] = useState('hello')
	const [isInput, setIsInput] = useState('')
	const refText = useRef('hello')
	const refInput = useRef('')

	function handleChange() {
		refText.current = refText.current + '!'
		console.log(refText.current)
	}

	function handleClick() {
		refInput.current.focus()
		setIsInput('')
	}

	return (
		<div>
			<br />
			<br />
			<p>{refText.current}</p>
			<button className='border' onClick={handleChange}>
				ref click: Click
			</button>
			<br />
			<div>
				<input
					className='border'
					value={isInput}
					ref={refInput}
					onChange={e => {
						setIsInput(e.target.value)
					}}
				/>
				<button onClick={handleClick}>focus</button>
			</div>
		</div>
	)
}

export default RefComponent
