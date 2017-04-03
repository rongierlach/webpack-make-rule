import { expect } from 'chai'
import makeRule from '../../src'

export default () => {
  expect(makeRule('foo')).to.be.an('object')
  .and.to.contain.all.keys('test', 'use', 'enforce', 'exclude', 'include')
}
