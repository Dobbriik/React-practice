import { useEffect, useState } from 'react'
import './index.css'

function ContentUseEffect() {
	const [name, setName] = useState('')
	const [color, setColor] = useState('')
	useEffect(() => {
		document.head.querySelector('title').textContent = 'hello'
	}, [])

	useEffect(() => {
		localStorage.setItem('Name', name)
	}, [name])

	function handelClick(e) {
		e.stopPropagation()
		!color ? setColor('red') : setColor('')
	}

	function handleStopPropagation(e) {
		e.stopPropagation()
	}

	useEffect(() => {
		const div = document.body.querySelector('#div')
		div.style.backgroundColor = color

		document.body.addEventListener('click', handelClick)

		return () => {
			document.body.removeEventListener('click', handelClick)
		}
	}, [color])

	return (
		<>
			<input
				className='border'
				type='text'
				value={name}
				onChange={e => {
					setName(e.target.value)
				}}
			/>

			<div
				id='div'
				className='flex justify-center mt-5 size-40 border '
				onClick={handleStopPropagation}
			>
				content
			</div>
			<br />
		</>
	)
}

export default ContentUseEffect
