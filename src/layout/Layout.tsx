import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'
import { Footer } from 'components/footer/Footer'
import { Header } from 'components/header/Header'

export const Layout = () => {
	return (
		<div className={s.wrapper}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
