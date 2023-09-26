import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import s from './footer.module.scss'
import { ecoLogo } from 'assets/images'
import { footerData } from 'data/constants'

export const Footer = () => {
	const year = new Date().getFullYear()
	const { topCategories, contact, usefulLinks } = footerData

	const contactRender = contact.information.map((item, index) => {
		const key = Object.keys(item)[0]

		return (
			<ListGroupItem key={index}>
				<span>
					<i className={item.icon}></i>
				</span>
				<p>{item[key]}</p>
			</ListGroupItem>
		)
	})

	return (
		<footer className={s.footer}>
			<Container>
				<Row>
					<Col lg="4">
						<div className={s.logo}>
							<img src={ecoLogo} alt="logo website" />
							<div>
								<h1>Multimart</h1>
							</div>
						</div>

						<p className={s.footerText}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
							perspiciatis ipsum ea vel voluptates amet unde iure fugiat ipsa
							ab!
						</p>
					</Col>

					<Col lg="3">
						<div className={s.quickLinks}>
							<h4 className={s.quickLinksTitle}>{topCategories.title}</h4>
							<ListGroup>
								{topCategories.categories.map(categorie => (
									<ListGroupItem key={categorie.display}>
										<Link to={categorie.path}>{categorie.display}</Link>
									</ListGroupItem>
								))}
							</ListGroup>
						</div>
					</Col>

					<Col lg="2">
						<div className={s.quickLinks}>
							<h4 className={s.quickLinksTitle}>{usefulLinks.title}</h4>
							<ListGroup>
								{usefulLinks.links.map(categorie => (
									<ListGroupItem key={categorie.display}>
										<Link to={categorie.path}>{categorie.display}</Link>
									</ListGroupItem>
								))}
							</ListGroup>
						</div>
					</Col>

					<Col lg="3">
						<div className={`${s.quickLinks} ${s.contat}`}>
							<h4 className={s.quickLinksTitle}>{contact.title}</h4>
							<ListGroup>{contactRender}</ListGroup>
						</div>
					</Col>

					<Col lg="12">
						<p className={s.copyright}>
							&copy; {year} developed by Vladyslav Kolhanov. All rights
							reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
