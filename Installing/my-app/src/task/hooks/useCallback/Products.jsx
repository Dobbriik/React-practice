import { memo } from 'react'

function Products({ list, onClick }) {
	console.log('product render')
	const lis = list.map((e, i) => {
		return <li key={i}>{e}</li>
	})
	return (
		<>
			<ul>{lis}</ul>
			<button onClick={onClick}>add</button>
			<br />
		</>
	)
}

export default memo(Products) // если  передан пропс с функцией то нужно использовать memo  and callback
