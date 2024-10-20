import { useEffect, useState } from 'react'

function Hidden() {
	const [display, setDisplay] = useState(false)

	useEffect(() => {
		const handleClick = event => {
			event.stopPropagation()
			// Проверяем, был ли клик на блоке или на ссылке
			// if (
			// 	!event.target.closest('.toggle-link') &&
			// 	!event.target.closest('.block')
			// ) {
			// }
			setDisplay(false)
		}

		document.body.addEventListener('click', handleClick)

		return () => {
			document.body.removeEventListener('click', handleClick)
		}
	}, [])

	function handleLinkClick(e) {
		e.preventDefault()
		e.stopPropagation()
		setDisplay(true)
	}

	function handleStopPropagation(e) {
		e.stopPropagation()
	}
	return (
		<>
			{display ? (
				<div
					className='block h-10 w-10 border '
					onClick={handleStopPropagation}
				>
					hide content
				</div>
			) : (
				''
			)}
			<a href='!' className='toggle-link' onClick={handleLinkClick}>
				click
			</a>
		</>
	)
}

export default Hidden
