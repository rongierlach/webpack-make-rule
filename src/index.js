const isString = value =>
  typeof value === 'string'

const isArray = value =>
  Array.isArray(value)

const isObject = value =>
  typeof value === 'object'

const normalizeTest = ext => {
  if (!ext) throw new TypeError('The extension argument may not be null or undefined')
  return isString(ext) ? RegExp(`/.${ext}$/`) : ext
}

const normalizeLoader = (loader, ext) => {
  if (isArray(loader)) return loader
  if (isString(loader)) return [ loader ]
const stringToLoader = (loader, options) =>
  ({ loader, options })

const objectToLoader = (loader, _options) => {
  const options = Object.assign({}, loader.options, _options)
  return Object.assign({}, loader, {options})
}

const arrayToEntry = (loaders, options) =>
  loaders.map(loader => {
    if (isString(loader)) return stringToLoader(loader, options)
    if (isObject(loader)) return objectToLoader(loader, options)
    throw new TypeError('When passing an array of loaders, each loader must be a string or an object')
  })

  return [ loader || `${ext}-loader` ]
}

/** @function
 * @name makeRule
 * @desc Returns a Webpack rule configuration object
 * @param {string|object} ext
 * @param {string|object|Array.<string|object>} loader
 * @param {object} options
 * @param {string} enforce
 * @param {string|object|Array.<string|object>} exclude
 * @param {string|object|Array.<string|object>} include
 */
export default (ext, loader, options, enforce, exclude, include) => ({
  test:
    normalizeTest(ext),
  use:
    normalizeLoader(loader, ext),
  options:
    options || undefined,
  enforce:
    enforce || undefined,
  exclude:
    exclude || /(node_modules|bower_components)/,
  include:
    include || undefined
})
