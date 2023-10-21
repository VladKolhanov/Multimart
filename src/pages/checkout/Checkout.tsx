import { FC } from 'react'

import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import s from './checkout.module.scss'
import { Helmet } from '../../components/helmet/Helmet'
import { CommonSection } from 'components/ui/CommonSection'
import { useAppSelector } from 'hooks/useAppSelector'
import { getTotalAmount, getTotalQuantity } from 'store/slices/cartSlice'
import { checkoutForm } from 'data/constants'

export const Checkout: FC = () => {
	const totalQty = useAppSelector(getTotalQuantity)
	const totalAmount = useAppSelector(getTotalAmount)

	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />

			<section>
				<Container>
					<Row>
						<Col lg="8">
							<h6 className={s.subtitle}>Billing Information</h6>
							<Form className={s.billingForm}>
								{checkoutForm.map(field => (
									<FormGroup key={field.name} className={s.formGroup}>
										<input {...field} />
									</FormGroup>
								))}
							</Form>
						</Col>

						<Col lg="4" className={s.checkout}>
							<div className={s.checkoutCart}>
								<h6>
									Total Qty: <span>{totalQty} items</span>
								</h6>
								<h6>
									Subtotal: <span>${totalAmount}</span>
								</h6>
								<h6>
									<span>
										Shipping: <br />
										free shipping
									</span>
									<span>$0</span>
								</h6>
								<h4>
									Total Cost: <span>${totalAmount}</span>
								</h4>
								<button className={s.btn}>Place an order</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
