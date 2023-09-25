import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'remixicon/fonts/remixicon.css'

import './styles/global.scss'
import { routers } from './routers/Routers'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={routers} />
	</React.StrictMode>
)
