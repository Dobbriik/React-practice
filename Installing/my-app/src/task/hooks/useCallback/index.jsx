import { useCallback, useState } from 'react'
import Products from './Products'

function CallbackComponent() {
	const [text, setText] = useState(
		'проверить будут ли отрисовываться другие компоненты'
	)
	const [list, setList] = useState([
		'product1',
		'product2',
		'product3',
		'product4',
	])

	const additems = useCallback(() => {
		setList(() => [...list, 'new product'])
	}, [list]) // если  передан пропс с функцией то нужно использовать memo  and callback

	function handleClick() {
		setList(pref => [...pref, 'new product'])
	} // так не будет работать

	return (
		<>
			<br />
			<p
				onClick={() => {
					setText(text + '!')
				}}
			>
				{text}
			</p>
			<Products list={list} onClick={additems} />
		</>
	)
}

export default CallbackComponent
