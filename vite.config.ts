import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
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
		},
	},
})
