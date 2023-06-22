import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { terser } from 'rollup-plugin-terser'

console.log()

export default defineConfig({
	plugins: [
		react()
		// terser({
		// 	output: {
		// 		comments: false
		// 	}
		// })
	],
	build: {
		minify: false,
		// outDir: 'dist/static'
	}
})
