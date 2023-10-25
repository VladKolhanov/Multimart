import { Container, Row, Col } from 'reactstrap'
import { BeatLoader } from 'react-spinners'
import { deleteDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import s from './users.module.scss'
import { IAuthUser, useGetData } from 'hooks/useGetData'
import { db } from 'fireBase/firebase.config'

export const Users = () => {
	const usersData = useGetData('users') as IAuthUser[]

	const handleDeleteUser = async (id: string) => {
		try {
			await deleteDoc(doc(db, 'users', id))
			toast.success('user deleted!')
		} catch (error) {
			toast.error('user is not deleted')
			console.error(error)
		}
	}

	return (
		<section>
			<Container>
				<Row>
					<Col lg="12">
						<h4 className={s.title}>Users</h4>
					</Col>
					<Col lg="12" className={s.table}>
						<table className="table">
							<thead>
								<tr>
									<th>Image</th>
									<th>Username</th>
									<th>Email</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody>
								{usersData?.map(user => (
									<tr key={user.uid}>
										<td>
											<img src={user.photoURL} alt="user photo" />
										</td>
										<td>{user.displayName}</td>
										<td>{user.email}</td>
										<td>
											<button
												onClick={() => handleDeleteUser(user.uid)}
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

						{!usersData && (
							<div className={s.loader}>
								<BeatLoader color="#20325f" size={40} />
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</section>
	)
}
