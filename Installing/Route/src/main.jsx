import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage404 from './error-page-404'
import Product, { loader as productLoader } from './routes/product'

import Root, { loader as rootLoader, action as rootAction } from './routes/root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: 'products/:productId',
				element: <Product />,
				loader: productLoader,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
