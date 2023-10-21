import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

import { auth } from '../fireBase/firebase.config'

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<null | User>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setIsLoading(true)
			user ? setCurrentUser(user) : setCurrentUser(null)
			setIsLoading(false)
		})
	}, [])

	return { currentUser, isLoading }
}
