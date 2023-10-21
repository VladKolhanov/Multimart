import { BeatLoader } from 'react-spinners'

import s from './loader.module.scss'

export const Loader = () => {
	return (
		<div className={s.loader}>
			<BeatLoader size={50} color="#20325f" />
		</div>
	)
}
