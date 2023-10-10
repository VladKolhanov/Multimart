import { FC, useState, useRef, FormEvent, useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

import s from './productDetails.module.scss'
import { IProduct, products } from 'data/products'
import { Helmet } from 'components/helmet/Helmet'
import { CommonSection } from 'components/ui/CommonSection'
import { ProductsList } from 'components/ui/ProductsList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { addItem } from 'store/slices/cartSlice'

export const ProductDetails: FC = () => {
	const [tab, setTab] = useState<'desc' | 'rev'>('desc')
	const [rating, setRating] = useState<null | number>(null)
	const reviewUser = useRef<HTMLInputElement>(null)
	const reviewMsg = useRef<HTMLTextAreaElement>(null)
	const { id } = useParams<string>()
	const dispatch = useAppDispatch()

	const product = products.find(product => product.id === id) as IProduct

	const {
		imgUrl,
		productName,
		price,
		avgRating,
		reviews,
		description,
		shortDesc,
		category,
	} = product

	const relatedProducts = products.filter(
		product => product.category === category
	)

	const submitHandler = (e: FormEvent) => {
		e.preventDefault()

		const reviewObj = {
			userName: reviewUser.current?.value,
			text: reviewMsg.current?.value,
			rating: rating,
		}

		console.log(reviewObj)
		toast.success('Review submitted')
	}

	const addToCart = () => {
		dispatch(
			addItem({
				id: id!,
				productName: productName,
				image: imgUrl,
				price: price,
			})
		)

		toast.success('Product added successfully')
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [product])

	const productStars = (rating: number) => {
		const renderStars: JSX.Element[] = []

		for (let i = 0; i < Math.floor(rating); i++) {
			renderStars.push(
				<span key={i + 1}>
					<i className="ri-star-s-fill"></i>
				</span>
			)
		}

		if (!Number.isInteger(rating)) {
			renderStars.push(
				<span key={0.5}>
					<i className="ri-star-half-s-line"></i>
				</span>
			)
		}

		return renderStars
	}

	const reviewStars = () => {
		const reviewStars: JSX.Element[] = []

		for (let i = 1; i <= 5; i++) {
			if (rating === i) {
				reviewStars.push(
					<span
						className={s.currentRating}
						key={i}
						onClick={() => setRating(i)}
					>
						{i} <i className="ri-star-s-fill"></i>
					</span>
				)
			} else {
				reviewStars.push(
					<span key={i} onClick={() => setRating(i)}>
						{i} <i className="ri-star-s-fill"></i>
					</span>
				)
			}
		}

		return reviewStars
	}

	// Render

	const renderReviewStars = reviewStars()
	const renderProductsStars = productStars(avgRating)

	return (
		<Helmet title={productName}>
			<CommonSection title={productName} />

			<section className={s.productDetails}>
				<Container>
					<Row>
						<Col lg="6">
							<img src={imgUrl} alt="product" />
						</Col>

						<Col lg="6">
							<div className={s.details}>
								<h2>{productName}</h2>
								<div className={s.raiting}>
									<div>{renderProductsStars}</div>
									<p>
										<span className={s.value}>({avgRating} / 5)</span> ratings
									</p>
								</div>

								<div className={s.productPrice}>
									<span>${price}</span>
									<span>Category: {category.toUpperCase()}</span>
								</div>

								<p className={s.description}>{shortDesc}</p>

								<motion.button
									whileTap={{ scale: 1.1 }}
									className={s.btn}
									onClick={addToCart}
								>
									Add to Cart
								</motion.button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Description and reviews section */}

			<section>
				<Container>
					<Row>
						<Col lg="12">
							<div className={s.tab}>
								<button
									type="button"
									className={`${tab === 'desc' ? s.activeTab : s.noActiveTab}`}
									onClick={() => setTab('desc')}
								>
									Description
								</button>
								<button
									type="button"
									className={`${tab === 'rev' ? s.activeTab : s.noActiveTab}`}
									onClick={() => setTab('rev')}
								>
									Review ({reviews.length})
								</button>
							</div>

							{tab === 'desc' && <p className={s.description}>{description}</p>}

							{tab === 'rev' && (
								<div className={s.reviews}>
									<ul>
										{reviews.map((review, index) => (
											<li className={s.review} key={index}>
												<h6>Jhon Doe</h6>
												<span>{review.rating} (rating)</span>
												<p>{review.text}</p>
											</li>
										))}
									</ul>

									<div className={s.reviewForm}>
										<h4>Leave your experience</h4>
										<form action="" onSubmit={submitHandler}>
											<div className={s.formGroup}>
												<input
													ref={reviewUser}
													type="text"
													name="name"
													placeholder="Enter name"
													autoComplete="name"
													required
												/>
											</div>

											<div className={s.stars}>{renderReviewStars}</div>

											<div className={s.formGroup}>
												<textarea
													ref={reviewMsg}
													rows={4}
													name="message"
													placeholder="Review Message ..."
													required
												/>
											</div>

											<motion.button
												whileTap={{ scale: 1.2 }}
												type="submit"
												className={s.btn}
											>
												Submit
											</motion.button>
										</form>
									</div>
								</div>
							)}
						</Col>

						<Col lg="12" className={s.relatedTitle}>
							<h2>You might also like</h2>
						</Col>

						<ProductsList products={relatedProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
