import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'), // '@' 별칭을 'src' 디렉토리로 매핑
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
  server: {
    port: 3000,
  },
})
