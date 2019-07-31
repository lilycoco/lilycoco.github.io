import { ProductConstructor } from '../models/Home'

const productList: ProductConstructor[] = [
  {
    id: 0,
    name: 'Space Invaders',
    text:
      'I developed this with jQuery and Canvas over about a week, 1 months later since when I started learning programming',
    url: 'https://lilycoco-spaceinvaders.netlify.com/',
    imgSrc: '/static/pic/invaders.png',
    heart: 0,
    like: 0,
    iconImg: '/static/icon/invaders.png',
  },
  {
    id: 1,
    name: 'Tetris (jQuery)',
    text:
      'Probably you know this is the Tetris which is the game used to be very popular in the world. I also created this with jQuery only',
    url: 'https://lilycoco-tetris.netlify.com/',
    imgSrc: '/static/pic/tetris.png',
    heart: 0,
    like: 0,
    iconImg: '/static/icon/tetris3.png',
  },
  {
    id: 2,
    name: 'Mugen Sweeper',
    text:
      'This is unusual minesweeper which has unlimited field and enable to play with multiple players, developed with Node.js, Nuxt.js and Vue.js',
    url: 'https://mugensweeper.netlify.com/',
    imgSrc: '/static/pic/mugen.png',
    heart: 0,
    like: 0,
    iconImg: '/static/icon/bomb.png',
  },
  {
    id: 3,
    name: 'Tic Tac Toe',
    text: 'It is my first product with React and TypeScript.',
    url: '/tictac/',
    imgSrc: '/static/pic/tictac.png',
    heart: 0,
    like: 0,
    iconImg: '/static/icon/tictac.png',
  },
  {
    id: 4,
    name: 'Tetris (React)',
    text: 'It is my first product with React and TypeScript.',
    url: '/tetris/',
    imgSrc: '/static/pic/tetris2.png',
    heart: 0,
    like: 0,
    iconImg: '/static/icon/tetris.png',
  },
]

export const reversedProductList = productList.reverse()

export const addPoint = (content: ProductConstructor[], icon: string, i: number) =>
  content.map((c) => {
    if (c.id === i) {
      switch (icon) {
        case 'like':
          c.like += 1
          break
        case 'heart':
          c.heart += 1
          break
      }
    }
    return c
  })
