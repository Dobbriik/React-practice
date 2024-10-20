import { useState } from 'react'
import Daughter from './Daughter'
import Grandson from './Grandson'
import { MyContext } from './MyContext'
import Parent from './Parent'

function Context() {
	const [age, setAge] = useState(50)
	return (
		<MyContext.Provider value={age}>
			<br />
			<h2 className='text-5xl'>Context</h2>
			<Parent>
				<Daughter>
					<Grandson />
				</Daughter>
			</Parent>
			<button
				className='border'
				onClick={() => {
					setAge(pref => pref / 2)
				}}
			>
				change
			</button>
		</MyContext.Provider>
	)
}

export default Context
