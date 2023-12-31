import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export type TCartItem = {
	id: string
	productName: string
	image: string
	price: number
	quantity: number
	totalPrice: number
}

type TCartState = {
	cartItems: TCartItem[]
	totalAmount: number
	totalQuantity: number
}

const initialState: TCartState = {
	cartItems: [],
	totalAmount: 0,
	totalQuantity: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (
			state,
			action: PayloadAction<Omit<TCartItem, 'quantity' | 'totalPrice'>>
		) => {
			const newItem = action.payload
			const existingItem = state.cartItems.find(item => item.id === newItem.id)

			if (!existingItem) {
				state.cartItems.push({
					id: newItem.id,
					productName: newItem.productName,
					image: newItem.image,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				})
			} else {
				existingItem.quantity++
				existingItem.totalPrice = +existingItem.totalPrice + +existingItem.price
			}

			state.totalQuantity++

			state.totalAmount = state.cartItems.reduce((total, item) => {
				total += item.price * item.quantity

				return total
			}, 0)
		},

		deleteItem: (state, action: PayloadAction<string>) => {
			const id = action.payload

			state.cartItems = state.cartItems.reduce((acc: TCartItem[], product) => {
				if (product.id !== id) {
					acc.push(product)
				}

				if (product.id === id && product.quantity > 1) {
					product.quantity--
					acc.push(product)
				}

				return acc
			}, [])

			state.totalQuantity = state.cartItems.length

			state.totalAmount = state.cartItems.reduce((total, item) => {
				total += item.price * item.quantity

				return total
			}, 0)
		},
	},
})

export const getTotalQuantity = (state: RootState) => state.cart.totalQuantity

export const getTotalAmount = (state: RootState) => state.cart.totalAmount

export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer
