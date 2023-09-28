import React from 'react'
import { ProductCard } from './ProductCard'
import { IProduct } from 'data/products'

type ProductsListProps = {
	products: IProduct[] | undefined
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
	return (
		<>
			{!products && <p>Loading products await please</p>}

			{products &&
				products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						productName={product.productName}
						img={product.imgUrl}
						category={product.category}
						price={product.price}
					/>
				))}
		</>
	)
}
