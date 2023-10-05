import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'

import './styles/global.scss'
import { routers } from './routers/Routers'
import { ScreenWidthProvider } from 'context/ScreenWidthContext'
import { store } from 'store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<ScreenWidthProvider>
			<ToastContainer
				theme="dark"
				position="top-right"
				autoClose={3000}
				closeOnClick
				pauseOnHover={false}
			/>
			<RouterProvider router={routers} />
		</ScreenWidthProvider>
	</Provider>
)
