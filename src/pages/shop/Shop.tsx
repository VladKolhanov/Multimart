import { FC, ChangeEvent, useState, useEffect } from 'react'

import { Col, Container, Row } from 'reactstrap'

import s from './shop.module.scss'
import { Helmet } from 'components/helmet/Helmet'
import { CommonSection } from 'components/ui/CommonSection'
import { ProductsList } from 'components/ui/ProductsList'
import { selectCategory, selectSort } from 'data/constants'
import { useGetData } from 'hooks/useGetData'
import { IProduct } from 'types/types'

export const Shop: FC = () => {
	const [productsData, setProductsData] = useState<IProduct[] | null>(null)

	const productsFromFirebase = useGetData('products') as IProduct[]

	useEffect(() => {
		setProductsData(productsFromFirebase)
	}, [productsFromFirebase])

	const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
		const filterValue = e.target.value

		const filteredProducts = productsFromFirebase.filter(product => {
			if (filterValue === 'all') {
				return product
			}

			if (filterValue === product.category) {
				return product
			}
		})

		setProductsData(filteredProducts)
	}

	const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
		const sortValue = e.target.value

		let sortProducts: IProduct[] | null = []

		if (sortValue === 'all') {
			sortProducts = productsData
		}

		if (sortValue === 'ascending') {
			sortProducts = [...productsData].sort((a, b) => a.price - b.price)
		}

		if (sortValue === 'descending') {
			sortProducts = [...productsData].sort((a, b) => b.price - a.price)
		}

		setProductsData(sortProducts)
	}

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value

		const searchProducts = productsFromFirebase.filter(product =>
			product.productName.toLowerCase().includes(searchTerm.toLowerCase())
		)

		setProductsData(searchProducts)
	}

	return (
		<Helmet title="Shop">
			<CommonSection title="Products" />

			<section>
				<Container>
					<Row>
						<Col lg="3" md="6">
							<div className={s.widget}>
								<select name={selectCategory.name} onChange={handleFilter}>
									{selectCategory.options.map((option, index) => (
										<option key={index} value={option.value}>
											{option.display}
										</option>
									))}
								</select>
							</div>
						</Col>

						<Col lg="3" md="6">
							<div className={s.widget}>
								<select name="sort" onChange={handleSort}>
									{selectSort.options.map((option, index) => (
										<option key={index} value={option.value}>
											{option.display}
										</option>
									))}
								</select>
							</div>
						</Col>

						<Col lg="6" md="12">
							<div className={s.search}>
								<input
									type="text"
									placeholder="Search..."
									onChange={handleSearch}
								/>
								<span>
									<i className="ri-search-line"></i>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className={s.products}>
				<Container>
					<Row>
						{!productsData && (
							<h1 className={s.noProducts}>No products are found!</h1>
						)}
						{productsData && <ProductsList products={productsData} />}
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
