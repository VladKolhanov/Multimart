import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import s from './productCard.module.scss'

export const ProductCard = ({ id, productName, img, category, price }) => {
	return (
		<Col lg="3">
			<div className={s.item}>
				<div className={s.img}>
					<motion.img src={img} alt="product" whileHover={{ scale: 0.9 }} />
				</div>

				<div className={s.productInfo}>
					<h3 className={s.productName}>
						<Link to={`/shop/${id}`}>{productName}</Link>
					</h3>
					<span>{category}</span>
				</div>

				<div className={s.costInfo}>
					<span className={s.price}>${price}</span>
					<motion.span whileTap={{ scale: 1.2 }}>
						<i className="ri-add-line"></i>
					</motion.span>
				</div>
			</div>
		</Col>
	)
}
// s.cardBottom
