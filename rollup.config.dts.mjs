import dts from 'rollup-plugin-dts'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  input: `${__dirname}/dist/types/src/index.d.ts`,
  output: {
    file: `${__dirname}/dist/index.d.ts`,
    format: 'es',
  },
  plugins: [dts()],
}
