import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'

import { RouterProvider } from 'react-router-dom'
import { routers } from './routers/Routers'

import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={routers} />
	</React.StrictMode>
)
