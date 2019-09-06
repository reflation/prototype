import getSharedConfig from './getSharedConfig'

const config = getSharedConfig({
  entry: './src/Main/index.ts',
  filename: 'bundle.js',
  outputDir: 'public/Main',
})

export default config
