import { ProductCard } from './ProductCard'

export const ProductsList = ({ products }) => {
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
