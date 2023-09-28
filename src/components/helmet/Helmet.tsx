import React, { ReactNode } from 'react'

type HelmetProps = { title: string; children: ReactNode }

export const Helmet: React.FC<HelmetProps> = ({ children, title }) => {
	document.title = 'Multimart - ' + title

	return <div className="w-100">{children}</div>
}
