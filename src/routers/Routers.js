import React from 'react'
import {
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
} from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Cart } from '../pages/Cart'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { ProductDetails } from '../pages/ProductDetails'
import { Shop } from '../pages/Shop'
import { Signup } from '../pages/Signup'

export const routers = createBrowserRouter(
	createRoutesFromChildren(
		<Route path="home?" element={<Layout />}>
			<Route index element={<Home />} />,
			<Route path="shop" element={<Shop />} />,
			<Route path="shop/:id" element={<ProductDetails />} />,
			<Route path="cart" element={<Cart />} />,
			<Route path="checkout" element={<Checkout />} />,
			<Route path="login" element={<Login />} />,
			<Route path="signup" element={<Signup />} />,
		</Route>
	)
)
