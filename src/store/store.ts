import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './slices/cartSlice'

export const store = configureStore({
	reducer: {
		cart: cartSlice,
	},
})
console.log(store.getState())
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
