import React from 'react'
import {
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
} from 'react-router-dom'
import { Layout } from 'layout/Layout'
import { Cart } from 'pages/cart/Cart'
import { Checkout } from 'pages/checkout/Checkout'
import { Home } from 'pages/home/Home'
import { Login } from 'pages/login/Login'
import { ProductDetails } from 'pages/productDetails/ProductDetails'
import { Shop } from 'pages/shop/Shop'
import { Signup } from 'pages/signUp/Signup'

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
