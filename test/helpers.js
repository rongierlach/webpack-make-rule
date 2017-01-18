const getExpectation = fileName =>
  `should ${fileName.split('-').join(' ').replace('.js', '')}`

const getReality = fileName =>
  require(`./cases/${fileName}`).default

const runTest = fileName =>
  it(getExpectation(fileName), getReality(fileName))

export {
  runTest
}
