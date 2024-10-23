import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'
import { getProducts } from '../forStorage'
import { createProduct } from '../forStorage'

export async function loader() {
	const products = await getProducts()
	return { products }
}

export async function action() {
	const product = await createProduct()
	return { product }
}

function Root() {
	const { products } = useLoaderData()

	return (
		<div id='main'>
			<div id='menu'>
				<Form method='post'>
					<button type='submit'>add product</button>
				</Form>
				{products.length ? (
					<nav>
						{products.map(product => (
							<Link key={product.id} to={`products/${product.id}`}>
								{product.name ? product.name : <i>Unnamed</i>}
							</Link>
						))}
					</nav>
				) : (
					<p>
						<i>no products here ...</i>
					</p>
				)}
			</div>

			<div id='product'>
				<Outlet />
			</div>
		</div>
	)
}

export default Root
