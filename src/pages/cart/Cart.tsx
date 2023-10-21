import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import s from './cart.module.scss'
import { Helmet } from 'components/helmet/Helmet'
import { CommonSection } from 'components/ui/CommonSection'
import { useAppSelector } from 'hooks/useAppSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { deleteItem } from 'store/slices/cartSlice'
import { useAuth } from 'hooks/useAuth'

export const Cart: React.FC = () => {
	const cartItems = useAppSelector(state => state.cart.cartItems)
	const totalAmount = useAppSelector(state => state.cart.totalAmount)
	const dispatch = useAppDispatch()
	const { currentUser } = useAuth()

	const handleDeleteProduct = (id: string) => {
		dispatch(deleteItem(id))
		toast.success('Product was deleted')
	}

	return (
		<Helmet title="Cart">
			<CommonSection title="Shopping Cart" />
			<section>
				<Container>
					<Row>
						<Col lg="9">
							{!cartItems.length && (
								<p className={s.noProducts}>No product added to the cart</p>
							)}
							{!!cartItems.length && (
								<table className={`table ${s.table}`}>
									<thead>
										<tr>
											<th>Image</th>
											<th>Title</th>
											<th>Price</th>
											<th>Qty</th>
											<th>Delete</th>
										</tr>
									</thead>

									<tbody>
										{cartItems.map(product => (
											<tr key={product.id}>
												<td>
													<img src={product.image} alt="product" />
												</td>
												<td>{product.productName}</td>
												<td>${product.price}</td>
												<td>{product.quantity}</td>
												<td>
													<motion.button
														whileTap={{ scale: 1.2 }}
														type="button"
														onClick={() => handleDeleteProduct(product.id)}
													>
														<i className="ri-delete-bin-line" />
													</motion.button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</Col>

						<Col lg="3">
							<div>
								<h6 className={s.subtotal}>
									Subtotal <span className={s.totalAmount}>${totalAmount}</span>
								</h6>
							</div>
							<p className={s.description}>
								taxes and shipping will calculate in checkout
							</p>
							<div>
								<Link
									className={s.btn}
									to={currentUser ? '/checkout' : '/login'}
								>
									Checkout
								</Link>

								<Link className={s.btn} to="/shop">
									Continue Shopping
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
