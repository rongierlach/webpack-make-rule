import makeRule from './src/'
import { resolve } from 'path'

export default {
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, './lib'),
    filename: 'index.js',
    library: 'WebpackMakeRule',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ]
  },
  target: 'node',
  stats: {
    chunks: true,
    colors: true,
    hash: true,
    version: false,
    timings: true
  }
}
