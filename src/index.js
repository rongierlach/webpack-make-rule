const isString = value =>
  typeof value === 'string'

const isArray = value =>
  Array.isArray(value)

// https://webpack.js.org/configuration/module/#condition
const normalizeTest = ext => {
  if (!ext) throw new TypeError('You must pass an extension as an argument to makeRule')
  return isString(ext) ? RegExp(`/.${ext}$/`) : ext
}

const normalizeLoader = (loader, ext) => {
  if (isArray(loader)) return loader
  if (isString(loader)) return [ loader ]
  return [ loader || `${ext}-loader` ]
}

/** @function
 * @name makeRule
 * @desc Returns a Webpack rule configuration object
 * @param {string|object} ext
 * @param {string|object|Array.<string|object>} loader
 * @param {string} enforce
 * @param {string|object|Array.<string|object>} exclude
 * @param {string|object|Array.<string|object>} include
 */
export default (ext, loader, enforce, exclude, include) => ({
  test:
    normalizeTest(ext),
  use:
    normalizeLoader(loader, ext),
  enforce:
    enforce || undefined,
  exclude:
    exclude || /node_modules/,
  include:
    include || undefined
})
