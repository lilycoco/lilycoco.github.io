// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  poweredByHeader: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/game': { page: '/game' },
      '/blog/1': { page: '/article', query: { id: 1 } },
      '/blog/2': { page: '/article', query: { id: 2 } },
      '/blog/3': { page: '/article', query: { id: 3 } },
    }
  },
})
