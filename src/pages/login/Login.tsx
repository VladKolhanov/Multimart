import { FC, useState, FormEvent } from 'react'

import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './login.module.scss'
import { Helmet } from 'components/helmet/Helmet'
import { auth } from 'fireBase/firebase.config'

export const Login: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const navigate = useNavigate()

	const handleSignIn = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			await signInWithEmailAndPassword(auth, email, password)

			toast.success('Successfully logged in ')
			navigate('/home')
		} catch (error) {
			toast.error('Email or password are not correct')
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Helmet title="Login">
			<section>
				<Container>
					<Row>
						{isLoading && (
							<Col lg="12" className={s.loading}>
								<h5>Loading....</h5>
							</Col>
						)}

						{!isLoading && (
							<Col lg="6" className={s.login}>
								<h3>Login</h3>

								<Form className={s.form} onSubmit={handleSignIn}>
									<FormGroup className={s.formGroup}>
										<input
											type="email"
											placeholder="Enter your email"
											value={email}
											autoComplete="email"
											onChange={e => setEmail(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className={s.formGroup}>
										<input
											type="password"
											placeholder="Enter your password"
											value={password}
											autoComplete="password"
											onChange={e => setPassword(e.target.value)}
										/>
									</FormGroup>

									<button type="submit" className={s.btn}>
										Login
									</button>

									<p>
										Don't have an account?
										<Link to="/signup"> Create an account</Link>
									</p>
								</Form>
							</Col>
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	)
}
