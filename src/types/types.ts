export interface IProduct {
	id: string
	docId?: string
	productName: string
	imgUrl: string
	category: string
	price: number
	shortDesc: string
	description: string
	reviews: {
		rating: number
		text: string
	}[]

	avgRating: number
}

export type TFetchStatus = 'idle' | 'loading' | 'completed' | 'error'

export type TProductFromInputs = {
	title: string
	shortDesc: string
	description: string
	price: string
	category: string
	imgUrl: File
}
