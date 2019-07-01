import * as React from 'react'
import { Tron } from '../models/Tron'
import { Products } from '../components/Products'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import { S_IFCHR } from 'constants'
// import fetch from "isomorphic-unfetch";

interface EProps {
  contents: Tron[]
}

const Content: Tron[] = [
  {
    id: 1,
    right: true,
    name: 'Space Invaders',
    text:
      'I developed this with jQuery and Canvas over about a week, 1 months later since when I started learning programming',
    url: 'https://lilycoco-spaceinvaders.netlify.com/',
    imgSrc: '/static/invaders.png',

    heart: 0,
    like: 0,
  },
  {
    id: 2,
    right: true,
    name: 'Tetris',
    text:
      'Probably you know this is the Tetris which is the game used to be very popular in the world. I also created this with jQuery only',
    url: 'https://lilycoco-tetris.netlify.com/',
    imgSrc: '/static/tetris.png',
    heart: 0,
    like: 0,
  },
  {
    id: 3,
    right: true,
    name: 'Mugen Sweeper',
    text:
      'This is unusual minesweeper which has unlimited field and enable to play with multiple players, developed with Node.js, Nuxt.js and Vue.js',
    url: 'https://mugensweeper.netlify.com/',
    imgSrc: '/static/mugen.png',
    heart: 0,
    like: 0,
  },
]

export default class Home extends React.Component<EProps> {
  state = { content: Content }

  addCount = (i: number) => {
    const current = this.state.content.slice()
    if (i >= 10) {
      current[i - 10].heart += 1
    } else {
      current[i].like += 1
    }
    this.setState({ content: current })
  }

  public render() {
    return (
      <Layout>
        <MainTitle>What's New?</MainTitle>
        <Products contents={this.state.content} onClick={(i: any) => this.addCount(i)} />
      </Layout>
    )
  }
}
