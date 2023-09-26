import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

import s from './services.module.scss'
import { serviceData } from 'data/constants'

export const Services = () => {
	return (
		<section className={s.services}>
			<Container>
				<Row>
					{serviceData.map(service => (
						<Col key={service.title} lg="3" md="4">
							<motion.div
								whileHover={{ scale: 1.1 }}
								style={{ backgroundColor: service.bg }}
								className={s.serviceItem}
							>
								<span>
									<i className={service.icon} />
								</span>
								<div>
									<h3>{service.title}</h3>
									<p>{service.subtitle}</p>
								</div>
							</motion.div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	)
}
