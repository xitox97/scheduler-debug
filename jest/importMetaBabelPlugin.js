/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * This plugin bug related to import.meta
 * Fix: import.meta does not exist when run unit test with jest.
 * @link https://github.com/vitejs/vite/issues/1149
 * @link https://github.com/FredKSchott/create-snowpack-app/commit/c84d51bf5d10db82d6ff459dc9618710ea72f293
 */
const template = require('@babel/template').default

const envTest = {
  MODE: 'test',
  DEV: false,
  PROD: false,
}

module.exports = () => {
  const ast = template.ast(`
({env: ${JSON.stringify(envTest)}})
`)
  return {
    visitor: {
      MetaProperty(path) {
        path.replaceWith(ast)
      },
    },
  }
}
