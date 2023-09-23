import React from 'react'
import styles from './header.module.scss'
import { Container, Row } from 'reactstrap'
import { ecoLogo, userIcon } from '../../assets/images'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/ui'
import { motion } from 'framer-motion'

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '')

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Row>
					<div className={styles.wrapper}>
						<div className={styles.logo}>
							<img src={ecoLogo} alt="logo website" />
							<div>
								<h1>Multimart</h1>
							</div>
						</div>

						<div className={styles.navigation}>
							<ul className={styles.menu}>
								{navigation.map(link => (
									<li key={link.path} className={styles.menuItem}>
										<NavLink to={link.path} className={activeLink}>
											{link.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.icons}>
							<span className={styles.icon}>
								<i className="ri-heart-line" />
								<span className={styles.badge}>1</span>
							</span>
							<span className={styles.icon}>
								<i className="ri-shopping-bag-line" />
								<span className={styles.badge}>2</span>
							</span>

							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={userIcon}
									alt="current user icon"
								/>
							</span>
						</div>

						<div className={styles.mobileMenu}>
							<span>
								<i className="ri-menu-line" />
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	)
}
