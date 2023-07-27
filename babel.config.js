// eslint-disable-next-line @typescript-eslint/no-var-requires, import/extensions
const importMetaBabelPlugin = require('./jest/importMetaBabelPlugin')

module.exports = {
  env: {
    test: {
      plugins: [importMetaBabelPlugin],
    },
  },
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
}
