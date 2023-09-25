import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import s from './header.module.scss'
import { ecoLogo, userIcon } from 'assets/images'
import { navigation } from 'data/ui'

const activeLink = ({ isActive }) => (isActive ? `${s.active}` : '')

export const Header = () => {
	return (
		<header className={s.header}>
			<Container>
				<Row>
					<div className={s.wrapper}>
						<div className={s.logo}>
							<img src={ecoLogo} alt="logo website" />
							<div>
								<h1>Multimart</h1>
							</div>
						</div>

						<div className={s.navigation}>
							<ul className={s.menu}>
								{navigation.map(link => (
									<li key={link.path} className={s.menuItem}>
										<NavLink to={link.path} className={activeLink}>
											{link.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						<div className={s.icons}>
							<span className={s.icon}>
								<i className="ri-heart-line" />
								<span className={s.badge}>1</span>
							</span>
							<span className={s.icon}>
								<i className="ri-shopping-bag-line" />
								<span className={s.badge}>2</span>
							</span>

							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={userIcon}
									alt="current user icon"
								/>
							</span>
						</div>

						<div className={s.mobileMenu}>
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
