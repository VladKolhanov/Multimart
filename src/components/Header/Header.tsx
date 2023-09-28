import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import s from './header.module.scss'
import { ecoLogo, userIcon } from 'assets/images'
import { navigation } from 'data/constants'

const activeLink = ({ isActive }: { isActive: boolean }) =>
	isActive ? `${s.active}` : ''

export const Header: React.FC = () => {
	const headerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const onScroll: EventListener = () => {
			document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
				? headerRef.current?.classList.add(s.sticky)
				: headerRef.current?.classList.remove(s.sticky)
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header ref={headerRef} className={s.header}>
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
