import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { Loader } from 'components/loader/Loader'

type TPropsProtectedRoute = {
	children: ReactNode
}

export const ProtectedRoute: FC<TPropsProtectedRoute> = ({ children }) => {
	const { currentUser, isLoading } = useAuth()
	const { pathname } = useLocation()

	if (!currentUser && !isLoading && pathname === '/dashboard') {
		return <Navigate to="/login" />
	}

	if (isLoading) {
		return <Loader />
	}

	return children
}
