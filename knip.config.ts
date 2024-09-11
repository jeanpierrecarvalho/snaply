import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  workspaces: {
    '.': {
      entry: ['src/**/*'],
      ignore: ['rollup.config.dts.mjs', 'tools/scripts/generate-contributors.mts'],
      ignoreDependencies: [
        '@eslint/eslintrc',
        'rollup-plugin-dts',
        '@nx/web',
        'tsx',
        '@semantic-release/commit-analyzer',
        '@semantic-release/github',
        '@semantic-release/release-notes-generator',
      ],
      ignoreBinaries: ['rollup'],
    },
  },
}

export default config
