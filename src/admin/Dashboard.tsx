import { Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import s from './dashboard.module.scss'
import { useGetData } from 'hooks/useGetData'

export const Dashboard = () => {
	const products = useGetData('products')
	const users = useGetData('users')

	return (
		<>
			<section>
				<Container>
					<Row className={s.dashboard}>
						<Col lg="3">
							<div className={s.revenueBox}>
								<h5>Total Sales</h5>
								<span>$7890</span>
							</div>
						</Col>
						<Col lg="3">
							<div className={s.orderBox}>
								<h5>Orders</h5>
								<span>$789</span>
							</div>
						</Col>
						<Col lg="3">
							<div className={s.productsBox}>
								<h5>Total Products</h5>
								<span>{products?.length}</span>
							</div>
						</Col>
						<Col lg="3">
							<div className={s.usersBox}>
								<h5>Total Users</h5>
								<span>{users?.length}</span>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			
			<Outlet />
		</>
	)
}
