import { FC, ReactNode } from 'react'

import { useAuth } from '../hooks/useAuth'
import { Loader } from 'components/loader/Loader'

type TPropsProtectedRoute = {
	children: ReactNode
}

export const ProtectedRoute: FC<TPropsProtectedRoute> = ({ children }) => {
	const { isLoading } = useAuth()

	if (isLoading) {
		return <Loader />
	}

	return children
}
