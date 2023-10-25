import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import s from './layout.module.scss'
import { Footer } from 'components/footer/Footer'
import { Header } from 'components/header/Header'
import { AdminNav } from 'admin/AdminNav'

export const Layout = () => {
	const { pathname } = useLocation()

	return (
		<div className={s.wrapper}>
			{pathname.startsWith('/dashboard') && <AdminNav />}
			{!pathname.startsWith('/dashboard') && <Header />}
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
