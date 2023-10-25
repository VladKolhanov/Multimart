import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			admin: '/src/admin',
			fireBase: '/src/fireBase',
			assets: '/src/assets',
			components: '/src/components',
			data: '/src/data',
			hooks: '/src/hooks',
			layout: '/src/layout',
			pages: '/src/pages',
			routes: '/src/routes',
			styles: '/src/styles',
			context: '/src/context',
			store: '/src/store',
			types: '/src/types',
		},
	},
})
