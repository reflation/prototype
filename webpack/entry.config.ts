import { getSharedWebpackConfig } from './getSharedConfig.ts'
import * as path from 'path'

const config = getSharedWebpackConfig({
  entry: { login: './src/Login/index.ts', main: './src/Main/index.ts' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'public'),
  },
})

export default config
