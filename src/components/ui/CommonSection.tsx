import { FC } from 'react'

import { Container } from 'reactstrap'

import s from './commonSection.module.scss'

type TCommonSectionProps = {
	title: string
}

export const CommonSection: FC<TCommonSectionProps> = ({ title }) => {
	return (
		<section className={s.section}>
			<Container className="text-center">
				<h1>{title}</h1>
			</Container>
		</section>
	)
}
