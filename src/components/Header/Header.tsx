import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import s from './header.module.scss'
import { ecoLogo, userIcon } from 'assets/images'
import { navigation } from 'data/constants'
import { useScreenWidth } from 'context/ScreenWidthContext'
import { useAppSelector } from 'hooks/useAppSelector'

const activeLink = ({ isActive }: { isActive: boolean }) =>
	isActive ? `${s.active}` : ''

export const Header: React.FC = () => {
	const { orientation } = useScreenWidth()
	const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)
	const headerRef = useRef<HTMLElement>(null)

	const totalQuantity = useAppSelector(state => state.cart.totalQuantity)

	const menuToggle = () => {
		setIsMobileMenu(p => !p)
	}

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

						<AnimatePresence>
							{(isMobileMenu || orientation === 'desktop') && (
								<motion.nav
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className={s.navigation}
									onClick={menuToggle}
								>
									<motion.ul
										initial={{ x: '100%', opacity: 0.5 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: '100%', opacity: 0.5 }}
										transition={{ duration: 0.3 }}
										className={s.menu}
									>
										{navigation.map(link => (
											<li key={link.path} className={s.menuItem}>
												<NavLink to={link.path} className={activeLink}>
													{link.display}
												</NavLink>
											</li>
										))}
									</motion.ul>
								</motion.nav>
							)}
						</AnimatePresence>

						<div className={s.icons}>
							<span className={s.icon}>
								<i className="ri-heart-line" />
								<span className={s.badge}>1</span>
							</span>
							<span className={s.icon}>
								<i className="ri-shopping-bag-line" />
								{!!totalQuantity && (
									<span className={s.badge}>{totalQuantity}</span>
								)}
							</span>

							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={userIcon}
									alt="current user icon"
								/>
							</span>

							{orientation === 'mobile' && (
								<div className={s.mobileMenu} onClick={menuToggle}>
									<span>
										<i className="ri-menu-line" />
									</span>
								</div>
							)}
						</div>
					</div>
				</Row>
			</Container>
		</header>
	)
}
