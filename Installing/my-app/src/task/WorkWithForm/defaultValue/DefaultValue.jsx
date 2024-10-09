import { useState } from 'react'

function DefaultValue() {
	const [value, setValue] = useState('Default value')
	const [checked] = useState(true)

	return (
		<div>
			<h2>Default value</h2>
			<input
				defaultValue={value}
				onChange={event => {
					setValue(event.target.value)
				}}
			/>
			<input
				style={{ marginLeft: 7 }}
				type='checkbox'
				defaultChecked={checked}
			/>
		</div>
	)
}

export default DefaultValue
