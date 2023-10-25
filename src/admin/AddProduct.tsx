import { FC, useState, FormEvent, useId } from 'react'

import { Form, FormGroup, Container, Row, Col } from 'reactstrap'
import { toast } from 'react-toastify'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { BeatLoader } from 'react-spinners'

import s from './addProduct.module.scss'
import { db, storage } from 'fireBase/firebase.config'
import { TProductFromInputs, TFetchStatus } from 'types/types'

export const AddProduct: FC = () => {
	const fieldId = useId()
	const [fetchStatus, setFetchStatus] = useState<TFetchStatus>('idle')
	const navigate = useNavigate()

	const addProduct = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const target = e.currentTarget

		const formData = new FormData(target)

		const product = Object.fromEntries(formData) as TProductFromInputs

		try {
			setFetchStatus('loading')
			const docRef = collection(db, 'products')

			const storageRef = ref(
				storage,
				`productImages/${Date.now() + product.imgUrl.name}`
			)

			await uploadBytes(storageRef, product.imgUrl)

			const downloadURL = await getDownloadURL(storageRef)

			await addDoc(docRef, {
				...product,
				imgUrl: downloadURL,
				id: uuidv4(),
				reviews: [],
				avgRating: 3,
			})
			setFetchStatus('completed')
			toast.success('product successfully added!')
			navigate('/dashboard/all-products')
		} catch (error) {
			setFetchStatus('error')
			toast.error('product not added!')
			console.error(error)
		}
	}

	return (
		<section>
			<Container>
				<Row>
					<Col lg="12" className={s.addProduct}>
						{fetchStatus === 'loading' && (
							<div className={s.loading}>
								<BeatLoader color="#20325f" size={50} />
							</div>
						)}

						{fetchStatus === 'idle' && (
							<>
								<h4 className={s.title}>Add Product</h4>
								<Form onSubmit={addProduct}>
									<FormGroup className={s.formGroup}>
										<label htmlFor={`${fieldId}--title`}>Product title</label>
										<input
											id={`${fieldId}--title`}
											type="text"
											placeholder="Double sofa"
											name="productName"
											required
										/>
									</FormGroup>

									<FormGroup className={s.formGroup}>
										<label htmlFor={`${fieldId}--shortDesc`}>
											Short Description
										</label>
										<input
											id={`${fieldId}--shortDesc`}
											type="text"
											name="shortDesc"
											placeholder="Lorem....."
											required
										/>
									</FormGroup>

									<FormGroup className={s.formGroup}>
										<label htmlFor={`${fieldId}--description`}>
											Description
										</label>
										<input
											id={`${fieldId}--description`}
											type="text"
											name="description"
											placeholder="Description....."
											required
										/>
									</FormGroup>

									<fieldset className={s.formBottom}>
										<FormGroup className={s.formGroup}>
											<label htmlFor={`${fieldId}--price`}>Price</label>
											<input
												id={`${fieldId}--price`}
												type="number"
												name="price"
												placeholder="$100"
												required
											/>
										</FormGroup>

										<FormGroup className={s.formGroup}>
											<label>Category</label>
											<select name="category" required>
												<option>Select category</option>
												<option value="chair">Chair</option>
												<option value="sofa">Sofa</option>
												<option value="mobile">Mobile</option>
												<option value="watch">Watch</option>
												<option value="wireless">Wireless</option>
											</select>
										</FormGroup>
									</fieldset>

									<div>
										<FormGroup className={s.formGroup}>
											<label htmlFor={`${fieldId}--imgUrl`}>
												Product Image
											</label>
											<input
												id={`${fieldId}--imgUrl`}
												name="imgUrl"
												type="file"
												required
											/>
										</FormGroup>
									</div>

									<button type="submit" className={s.btn}>
										Add Product
									</button>
								</Form>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	)
}
