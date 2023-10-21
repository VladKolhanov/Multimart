import { FC, FormEvent, useState, ChangeEvent } from 'react'

import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

import s from './signup.module.scss'
import { auth } from 'fireBase/firebase.config'
import { Helmet } from 'components/helmet/Helmet'
import { storage } from 'fireBase/firebase.config'
import { db } from 'fireBase/firebase.config'

export const Signup: FC = () => {
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [file, setFile] = useState<File | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const navigate = useNavigate()

	// const signup = async (e: FormEvent) => {
	// 	e.preventDefault()
	// 	setLoading(true)

	// 	try {
	// 		const userCredential = await createUserWithEmailAndPassword(
	// 			auth,
	// 			email,
	// 			password
	// 		)

	// 		const user = userCredential.user
	// 		const storageRef = ref(storage, `images/${username}`)
	// 		const uploadTask = uploadBytesResumable(storageRef, file as File)

	// 		uploadTask.on(
	// 			'state_changed',
	// 			() => {
	// 				getDownloadURL(storageRef).then(url => {
	// 					// update user profile
	// 					updateProfile(user, {
	// 						displayName: username,
	// 						photoURL: url,
	// 					})

	// 					//store user data in firestore database
	// 					setDoc(doc(db, 'users', user.uid), {
	// 						uid: user.uid,
	// 						displayName: username,
	// 						email,
	// 						photoURL: url,
	// 					})
	// 				})
	// 			},
	// 			(error: Error) => {
	// 				console.error(error.message)
	// 				toast.error('something went wrong')
	// 			}
	// 		)
	// 	} catch (error) {
	// 		toast.error('something went wrong')
	// 	}
	// }

	const signup = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)

			const user = userCredential.user
			const storageRef = ref(storage, `images/${username}-${Date.now()}`)

			const uploadTask = await uploadBytes(storageRef, file as File)
			const downloadURL = await getDownloadURL(uploadTask.ref)

			await updateProfile(user, {
				displayName: username,
				photoURL: downloadURL,
			})

			await setDoc(doc(db, 'users', user.uid), {
				uid: user.uid,
				displayName: username,
				email,
				photoURL: downloadURL,
			})

			toast.success('Account created')
			navigate('/login')
		} catch (error) {
			toast.error('something went wrong')
		} finally {
			setLoading(false)
		}
	}

	const handleFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files

		if (files) {
			setFile(files[0])
		}
	}

	return (
		<Helmet title="Signup">
			<section>
				<Container>
					<Row>
						{loading && (
							<Col lg="12" className={s.loading}>
								<h5>Loading....</h5>
							</Col>
						)}

						{!loading && (
							<Col lg="6" className={s.login}>
								<h3>Signup</h3>

								<Form className={s.form} onSubmit={signup}>
									<FormGroup className={s.formGroup}>
										<input
											type="text"
											placeholder="Username"
											value={username}
											name="username"
											autoComplete="username"
											onChange={e => setUsername(e.target.value)}
										/>
									</FormGroup>

									<FormGroup className={s.formGroup}>
										<input
											type="email"
											placeholder="Enter your email"
											value={email}
											name="email"
											autoComplete="email"
											onChange={e => setEmail(e.target.value)}
										/>
									</FormGroup>

									<FormGroup className={s.formGroup}>
										<input
											type="password"
											placeholder="Enter your password"
											value={password}
											name="password"
											autoComplete="new-password"
											onChange={e => setPassword(e.target.value)}
										/>
									</FormGroup>

									<FormGroup className={s.formGroup}>
										<input type="file" name="file" onChange={handleFileLoad} />
									</FormGroup>

									<button type="submit" className={s.btn}>
										Create an account
									</button>

									<p>
										Already have an account?
										<Link to="/login"> Login</Link>
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
