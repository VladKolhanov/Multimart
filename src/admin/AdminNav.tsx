import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import s from './adminNav.module.scss'
import { useAuth } from 'hooks/useAuth'
import { adminNavigation } from 'data/constants'
import { userIcon } from 'assets/images'

export const AdminNav = () => {
	const { currentUser } = useAuth()

	const activeNavLink = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${s.active}` : ''

	const currentUserPhotoRender = currentUser
		? (currentUser.photoURL as string)
		: userIcon

	return (
		<>
			<header className={s.admin}>
				<div className={s.navTop}>
					<Container>
						<div className={s.navWrapper}>
							<div className={s.logo}>
								<h2>Multimart</h2>
							</div>

							<div className={s.searchBox}>
								<input type="text" placeholder="Search...." />
								<span>
									<i className="ri-search-line" />
								</span>
							</div>

							<div className={s.navTopRight}>
								<button type="button">
									<i className="ri-notification-3-line" />
								</button>
								<button type="button">
									<i className="ri-settings-2-line" />
								</button>
								<img src={currentUserPhotoRender} alt="avatar" />
							</div>
						</div>
					</Container>
				</div>
			</header>

			<section className={s.adminMenu}>
				<Container>
					<Row>
						<div className={s.menuNavigation}>
							<ul className={s.menuList}>
								{adminNavigation.map((item, i) => (
									<li key={i} className={s.menuItem}>
										<NavLink to={item.path} className={activeNavLink}>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</Row>
				</Container>
			</section>
		</>
	)
}
