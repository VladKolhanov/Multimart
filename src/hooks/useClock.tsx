import { useEffect, useState } from 'react'

export const useClock = (date: string) => {
	const [days, setDays] = useState<number>(0)
	const [hours, setHours] = useState<number>(0)
	const [minutes, setMinutes] = useState<number>(0)
	const [seconds, setSeconds] = useState<number>(0)

	const countDown = () => {
		const destination = new Date(date).getTime()

		const interval = setInterval(() => {
			const now = new Date().getTime()
			const different = destination - now

			const s = +Math.floor((different / 1000) % 60)
				.toString()
				.padStart(2, '0')
			const m = Math.floor((different / 1000 / 60) % 60)
			const h = Math.floor((different / 1000 / 60 / 60) % 24)
			const d = Math.floor(different / 1000 / 60 / 60 / 24)

			if (different < 0) {
				clearInterval(interval)
			} else {
				setDays(d)
				setHours(h)
				setMinutes(m)
				setSeconds(s)
			}
		})
	}

	useEffect(() => {
		countDown()
	}, [])

	return { days, hours, minutes, seconds }
}
