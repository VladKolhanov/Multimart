import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'

import './styles/global.scss'
import { routers } from './routers/Routers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={routers} />
)
