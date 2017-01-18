import fs from 'fs'
import { resolve } from 'path'
import { runTest } from './helpers'

const casesDir = resolve(__dirname, 'cases')
const fileNames = fs.readdirSync(casesDir)

describe('makeRule', () =>
  fileNames.map(runTest)
)
