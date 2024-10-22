import { Outlet, Link } from 'react-router-dom'
function Root() {
	return (
		<div id='main'>
			<nav>
				<Link to={`/products/1`}>Product1</Link>
				<Link to={`/products/2`}>Product2</Link>
			</nav>
			<div id='product'>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
