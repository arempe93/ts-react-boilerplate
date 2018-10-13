module.exports = function (api) {
  api.cache(true)
  const presets = [
    ['@babel/react'],
    ['@babel/env', { modules: false }],
    ['@babel/flow']
  ]

  const plugins = [
    ['react-hot-loader/babel'],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-transform-flow-strip-types'],
    ['babel-plugin-flow-react-proptypes'],
    ['module-resolver', {
      root: ['.'],
      alias: { '@': './src' }
    }],
    ['styled-components']
  ]

  const env = {
    test: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: false }]
      ],
      presets: [
        '@babel/react',
        ['@babel/env', { modules: 'commonjs' }]
      ]
    }
  }

  return {
    presets,
    plugins,
    env
  }
}
