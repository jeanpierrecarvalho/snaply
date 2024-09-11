import dts from 'rollup-plugin-dts'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  input: `${__dirname}/dist/types/src/index.d.ts`,
  output: [
    {
      file: `${__dirname}/dist/snaply.es.d.ts`, // ES module
      format: 'es',
    },
    {
      file: `${__dirname}/dist/snaply.cjs.d.ts`, // CommonJS module
      format: 'cjs',
    },
    {
      file: `${__dirname}/dist/snaply.umd.d.ts`, // UMD module
      format: 'umd',
    },
  ],
  plugins: [dts()],
}
