import { useState } from 'react'
import Child from './Child'

function ApiMemo() {
	const [name, setName] = useState('')

	return (
		<div>
			<br />
			<label>
				name:
				<input value={name} onChange={e => setName(e.target.value)} />
			</label>
			<Child />
			<br />
		</div>
	)
}

export default ApiMemo
