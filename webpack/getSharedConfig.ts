import * as path from 'path'
import * as webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

interface multipleEnrty {
  login: string
  main: string
}

interface GetConfigOption {
  entry: multipleEnrty
  output: webpack.Output
}
export function getSharedWebpackConfig({
  entry,
  output,
}: GetConfigOption): webpack.Configuration {
  const mode = (process.env.NODE_ENV ||
    'development') as webpack.Configuration['mode']
  const isDev = mode === 'development'
  const babelOptions = {
    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]],
    presets: [
      ['@babel/preset-typescript', { jsxPragma: 'h' }],
      '@babel/preset-env',
    ],
  }
  return {
    mode,
    entry,
    output,
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader', options: babelOptions }],
        },
        {
          test: /\/view\/.+\.tsx?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader', options: babelOptions }],
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './public',
                hmr: isDev,
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['!manifest.json'],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  }
}
