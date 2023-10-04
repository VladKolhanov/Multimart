import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'

import s from './home.module.scss'
import { Helmet } from 'components/helmet/Helmet'
import { counterTimer, heroImg } from 'assets/images'
import { Services } from 'components/services/Services'
import { ProductsList } from 'components/ui/ProductsList'
import { IProduct, products } from 'data/products'
import { Clock } from 'components/ui/Clock'

interface ISortedProducts {
	wireless: IProduct[]
	watch: IProduct[]
	chair: IProduct[]
	sofa: IProduct[]
	mobile: IProduct[]
	other: IProduct[]
}

export const Home = () => {
	const [sortProducts, setSordProducts] = useState<ISortedProducts | null>(null)

	useEffect(() => {
		const filteredProducts = products.reduce(
			(acc: ISortedProducts, product) => {
				switch (product.category) {
					case 'wireless':
						acc.wireless.push(product)
						break
					case 'watch':
						acc.watch.push(product)
						break
					case 'chair':
						acc.chair.push(product)
						break
					case 'sofa':
						acc.sofa.push(product)
						break
					case 'mobile':
						acc.mobile.push(product)
						break
					default:
						acc.other.push(product)
						break
				}
				return acc
			},
			{
				wireless: [],
				watch: [],
				chair: [],
				sofa: [],
				mobile: [],
				other: [],
			}
		)

		setSordProducts(filteredProducts)
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
						<ProductsList products={sortProducts?.chair} />
					</Row>
				</Container>
			</section>

			<section className={s.bestSales}>
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section-title">Best Sales</h2>
						</Col>
						<ProductsList products={sortProducts?.sofa} />
					</Row>
				</Container>
			</section>

			<section className={s.timerCount}>
				<Container>
					<Row>
						<Col lg="6" md="12" className={s.countDownCol}>
							<div className={s.topContent}>
								<h4>Limited Offers</h4>
								<h3>Quality Armchair</h3>
							</div>

							<Clock />

							<motion.button
								whileTap={{ scale: 1.2 }}
								className={`${s.btn} ${s.storeBtn}`}
							>
								<Link to="/shop">Visit Store</Link>
							</motion.button>
						</Col>

						<Col lg="6" md="12" className={`text-end ${s.counterImg}`}>
							<img src={counterTimer} alt="counter" />
						</Col>
					</Row>
				</Container>
			</section>

			<section className={s.arrivals}>
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h2 className="section-title">New Arrivals</h2>
						</Col>
						<ProductsList products={sortProducts?.mobile} />
						<ProductsList products={sortProducts?.wireless} />
					</Row>
				</Container>
			</section>

			<section className={s.popularCategory}>
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h2 className="section-title">Popular in Category</h2>
						</Col>
						<ProductsList products={sortProducts?.watch} />
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
