import { expect } from 'chai'
import makeRule from '../../src/'

export default () => {
  expect(makeRule).to.throw(TypeError)
}
