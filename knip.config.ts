import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  workspaces: {
    '.': {
      entry: ['src/**/*'],
      ignore: [],
      ignoreDependencies: ['@eslint/eslintrc'],
    },
  },
}

export default config
