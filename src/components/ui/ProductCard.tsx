import React from 'react'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { addItem } from 'store/slices/cartSlice'

import s from './productCard.module.scss'

type TProductCardProps = {
	id: string
	productName: string
	img: string
	category: string
	price: number
}

export const ProductCard: React.FC<TProductCardProps> = ({
	id,
	productName,
	img,
	category,
	price,
}) => {
	const dispatch = useAppDispatch()

	const addToCart = () => {
		dispatch(
			addItem({
				id: id,
				productName: productName,
				image: img,
				price: price,
			})
		)

		toast.success('Product added successfully')
	}

	return (
		<>
			<Col lg="3" md="4" className="mb-2">
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
						<motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
							<i className="ri-add-line"></i>
						</motion.span>
					</div>
				</div>
			</Col>
		</>
	)
}
