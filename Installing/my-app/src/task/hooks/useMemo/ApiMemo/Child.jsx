import { memo } from 'react'

// const Child = memo(function Child() {
// 	console.log('child render')
// 	return <h3>Hello !</h3>
// })

function Child({ name }) {
	console.log('child render')
	return <h3>Hello {name}!</h3>
}

export default memo(Child)
