import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config = {
  build: {
    lib: {
      entry: `${__dirname}/src/index.ts`,
      name: 'Snaply',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `snaply.${format}.js`,
    },
  },
  base: '',
  plugins: [tsconfigPaths()],
}

export default defineConfig(config)
