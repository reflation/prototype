import getSharedConfig from './getSharedConfig'
import * as path from 'path'

const config = getSharedConfig({
  entry: { login: './src/Login/index.ts', main: './src/Main/index.ts' },
  output: {
    filename: '[name].js',
  },
})

export default config
