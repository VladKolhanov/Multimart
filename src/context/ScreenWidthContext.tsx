import React, { useState, useEffect, useContext } from 'react'

type ScreenWidthProviderProps = {
	children: React.ReactNode
}

type TScreenWidthContext = {
	orientation: 'mobile' | 'desktop'
}

const initial: TScreenWidthContext = {
	orientation: window.screen.width > 768 ? 'desktop' : 'mobile',
}

export const ScreenWidthContext = React.createContext(initial)

export const ScreenWidthProvider: React.FC<ScreenWidthProviderProps> = ({
	children,
}) => {
	const [screen, setScreen] = useState<number>(window.screen.width)
	const [orientation, setOrientation] = useState(initial)

	useEffect(() => {
		screen > 768
			? setOrientation(p => ({ ...p, orientation: 'desktop' }))
			: setOrientation(p => ({ ...p, orientation: 'mobile' }))
	}, [screen])

	new ResizeObserver(([{ contentRect }]) => {
		setScreen(contentRect.width)
	}).observe(document.getElementById('root')!)

	return (
		<ScreenWidthContext.Provider value={orientation}>
			{children}
		</ScreenWidthContext.Provider>
	)
}

export const useScreenWidth = () => {
	return useContext(ScreenWidthContext)
}
