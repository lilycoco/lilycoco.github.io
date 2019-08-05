/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const withTypescript = require('@zeit/next-typescript')
// const withMDX = require('@next/mdx')({
//   extension: /\.(md|mdx)$/,
// })
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const getRoutes = async () => {
  const pathMap = {
    '/': { page: '/' },
    '/home': { page: '/home' },
    '/blog': { page: '/blog' },
    '/tetris': { page: '/tetris' },
    '/tictac': { page: '/tictac' },
  };

  const posts = JSON.parse(fs.readFileSync('./static/blog.json', 'utf-8'));
  return posts.reduce((map, post) => {
    map[`/blog/${post.href}`] = { page: '/article', query: { id: post.href } }
    return map;
  }, pathMap);
};

module.exports = 
  withTypescript({
    poweredByHeader: false,
    pageExtensions: ['js','jsx','ts', 'tsx'],
    exportPathMap: getRoutes,
    cssModules: true,
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config
    },
  })

