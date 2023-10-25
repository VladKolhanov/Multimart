import { useEffect, useState } from 'react'

import { collection, onSnapshot } from 'firebase/firestore'

import { db } from 'fireBase/firebase.config'
import { IProduct } from 'types/types'

export interface IAuthUser {
	displayName: string
	email: string
	photoURL: string
	uid: string
}

type TData = IProduct[] | IAuthUser[] | null
type TGetData = 'products' | 'users'

export const useGetData = (collectionName: TGetData) => {
	const [data, setData] = useState<TData>(null)

	const collectionRef = collection(db, collectionName)

	useEffect(() => {
		try {
			onSnapshot(collectionRef, snapshot => {
				const dataFromFirestore = snapshot.docs.map(doc => {
					if (collectionName === 'products') {
						return { ...doc.data(), docId: doc.id }
					}

					if (collectionName === 'users') {
						return { ...doc.data() }
					}
				})

				if (collectionName === 'products') {
					setData(dataFromFirestore as IProduct[])
				} else if (collectionName === 'users') {
					setData(dataFromFirestore as IAuthUser[])
				} else {
					setData([])
				}
			})
		} catch (error) {
			console.error(error)
		}
	}, [])

	return data
}
