import s from './clock.module.scss'
import { useClock } from 'hooks/useClock'

export const Clock = () => {
	const { days, hours, minutes, seconds } = useClock('Sept 30, 2023')

	return (
		<div className={s.wrapper}>
			<div className={s.data}>
				<div>
					<h1>{days}</h1>
					<h5>Days</h5>
				</div>
				<span>:</span>
			</div>

			<div className={s.data}>
				<div>
					<h1>{hours}</h1>
					<h5>Hours</h5>
				</div>
				<span>:</span>
			</div>

			<div className={s.data}>
				<div>
					<h1>{minutes}</h1>
					<h5>Minutes</h5>
				</div>
				<span>:</span>
			</div>

			<div className={s.data}>
				<div>
					<h1>{seconds}</h1>
					<h5>Seconds</h5>
				</div>
			</div>
		</div>
	)
}
