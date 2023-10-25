import { Container, Row, Col } from 'reactstrap'
import { BeatLoader } from 'react-spinners'
import { doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import s from './allProducts.module.scss'
import { useGetData } from 'hooks/useGetData'
import { db } from '../fireBase/firebase.config.ts'
import { IProduct } from 'types/types.ts'

export const AllProducts = () => {
	const productsData = useGetData('products') as IProduct[]

	const deleteProduct = async (id: string) => {
		await deleteDoc(doc(db, 'products', id))
		toast.success('Deleted!')
	}

	return (
		<section>
			<Container>
				<Row>
					<Col lg="12">
						{!productsData && (
							<div className={s.loader}>
								<BeatLoader color="#20325f" size={40} />
							</div>
						)}

						{productsData?.length === 0 && (
							<p className={s.notProducts}>Not products!</p>
						)}

						{!!productsData && (
							<table className={`table ${s.table}`}>
								<thead>
									<tr>
										<th>Image</th>
										<th>Title</th>
										<th>Category</th>
										<th>Price</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{productsData.map(product => (
										<tr className={s.row} key={product.id}>
											<td>
												<img src={product.imgUrl} alt="product" />
											</td>
											<td>{product.productName}</td>
											<td>{product.category}</td>
											<td>${product.price}</td>
											<td>
												<button
													onClick={() => deleteProduct(product.docId)}
													type="button"
													className={s.btn}
												>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	)
}
