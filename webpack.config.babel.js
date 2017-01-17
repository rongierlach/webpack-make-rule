import makeRule from './src/'
import { resolve } from 'path'
import { optimize } from 'webpack'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js'
  },
  module: {
    rules: [
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ]
  },
  target: 'node',
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ],
  stats: {
    chunks: true,
    colors: true,
    hash: true,
    version: false,
    timings: true
  }
}
