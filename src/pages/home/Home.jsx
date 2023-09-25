import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'

import s from './home.module.scss'
import { Helmet } from 'components/helmet/Helmet'
import { heroImg } from 'assets/images'
import { Services } from 'components/services/Services'
import { ProductsList } from 'components/ui/ProductsList'
import products from 'data/products'

export const Home = () => {
	const [chairProducts, setChairProducts] = useState(products)

	useEffect(() => {
		const filteredProducts = products.filter(
			product => product.category === 'chair'
		)

		setChairProducts(filteredProducts)
	}, [])

	const year = new Date().getFullYear()

	return (
		<Helmet title={'Home'}>
			<section className={s.hero}>
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className={s.content}>
								<p className={s.subtitle}>Trending product in {year}</p>
								<h2>Make Your Interior More Minimalistic & Modern </h2>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Repellendus itaque rerum consectetur eligendi.
								</p>

								<motion.button whileTap={{ scale: 1.2 }} className={s.btn}>
									<Link to="/shop">SHOP NOW</Link>
								</motion.button>
							</div>
						</Col>

						<Col lg="6" md="6">
							<div className={s.heroImg}>
								<img src={heroImg} alt="title home" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<Services />

			<section className={s.trending}>
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section-title">Trending Products</h2>
						</Col>
						<ProductsList products={chairProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
