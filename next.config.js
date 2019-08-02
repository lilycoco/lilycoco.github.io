/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTypescript = require('@zeit/next-typescript')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX(
  withTypescript({
    poweredByHeader: false,
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/home': { page: '/home' },
        '/blog': { page: '/blog' },
        '/tetris': { page: '/tetris' },
        '/tictac': { page: '/tictac' },
        '/blog/1': { page: '/article', query: { id: 1 } },
        '/blog/2': { page: '/article', query: { id: 2 } },
        '/blog/3': { page: '/article', query: { id: 3 } },
      }
    },
  })
);

