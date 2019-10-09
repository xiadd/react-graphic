module.exports = {
  type: 'react-component',
  webpack: {
    html: {
      template: 'demo/src/index.html'
    }
  },
  npm: {
    umd: {
      global: 'y',
      externals: {
        react: 'React'
      }
    }
  }
}
