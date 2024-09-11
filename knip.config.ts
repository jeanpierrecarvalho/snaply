import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  workspaces: {
    '.': {
      entry: ['src/**/*'],
      ignore: ['rollup.config.dts.mjs'],
      ignoreDependencies: ['@eslint/eslintrc', 'rollup-plugin-dts'],
      ignoreBinaries: ['rollup'],
    },
  },
}

export default config
