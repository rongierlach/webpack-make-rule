import { expect } from 'chai'
import makeRule from '../../src/'

export default () => {
  expect(makeRule('foo')).to.have.property('use')
  .that.is.instanceOf(Array)
  .and.to.include('foo-loader')
}
