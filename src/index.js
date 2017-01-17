/**
 * Enum string values.
 * @enum {string}

/** @function
 * @name makeRule
 * @desc Returns a Webpack rule configuration object
 * @param {object|string} ext
 * @param {string} loader
 * @param {string} enforce
 * @param {string} exclude
 * @returns {object} Webpack rule configuration
 * @example const rules = [
 *   makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
 *   makeRule(/\.jsx?$/, 'babel-loader'),
 *   makeRule('json')
 * ]
 */
export default (ext, loader, enforce, exclude, include) => ({
  test: typeof ext === 'string'
    ? RegExp(`/.${ext}$/`)
    : ext,
  use: typeof loader === 'string'
    ? loader
    : loader || `${ext}-loader`,
  enforce:
    enforce || undefined,
  exclude:
    exclude || /node_modules/,
  include:
    include || undefined
})
