import { getProduct } from '../forStorage'
import { useLoaderData } from 'react-router-dom'

export async function loader({ params }) {
	const product = await getProduct(params.productId)
	return { product }
}

function Product() {
	const { product } = useLoaderData()

	return (
		<div>
			<h2>Product page</h2>
			<p>Name: {product.name ? product.name : <i>unnamed</i>}</p>
			<p>Cost: {product.cost ? product.cost : <i>unknown</i>}</p>
			<p>Amount: {product.amount ? product.amount : <i>unknown</i>}</p>
		</div>
	)
}

export default Product
