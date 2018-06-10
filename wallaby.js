module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js*', '!src/**/__tests__/*-test.js', '!src/images/*'],

    tests: ['src/**/__tests__/*-test.js'],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    env: {
      type: 'node',

      params: {
        env: 'LOCAL_PATH=' + process.cwd()
      }
    },

    testFramework: 'mocha',

    delays: {
      run: 1000
    },

    setup: function () {
      require.extensions['.jsx'] = require.extensions['.js']
      require('./src/__tests__/setup')
      require('./src/__tests__/helpers')
      require('babel-register')({
        ignore: /node_modules\/(?!@hypd|quill)/
      })
    }
  }
}