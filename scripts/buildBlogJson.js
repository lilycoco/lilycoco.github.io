/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const fs = require('fs');
const fm = require('front-matter');

const postsDir = './static/blog';
const postsJson = './static/blog.json';

const posts = fs.readdirSync(postsDir).map(file => {
  const mdMeta = fm(fs.readFileSync(postsDir + "/" + file, 'utf-8'));
  return {
    href: file.replace(/.md$/, ''),
    title: mdMeta.attributes.title,
    date: file.split("-")[0],
  }
});
fs.writeFileSync(postsJson, JSON.stringify(posts.reverse()), 'utf-8');
