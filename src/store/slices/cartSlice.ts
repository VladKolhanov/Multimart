import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
	},
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
