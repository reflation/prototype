import getSharedConfig from './getSharedConfig'

const config = getSharedConfig({
  entry: './src/Login/index.ts',
  filename: 'bundle.js',
  outputDir: 'public/Login',
})

export default config
