import { useContext } from 'react'
import { MyContext } from './MyContext'

function Grandson() {
	const data = useContext(MyContext)
	return <div className='size-40 border'>{data / 2}</div>
}

export default Grandson
