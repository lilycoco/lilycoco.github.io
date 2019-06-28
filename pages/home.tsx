import * as React from 'react'
import { Tron } from '../models/Tron'
import { Products } from '../components/Products'
import { MainTitle, MainContent } from '../styled/Page'
// import fetch from "isomorphic-unfetch";

interface EProps {
  contents: Tron[]
}

export default class BlogsPage extends React.Component<EProps> {
  static async getInitialProps() {
    try {
      // const response = await fetch('https://pixabay.com/ja');
      // const json = await response.json();

      const json: Tron[] = [
        {
          id: 1,
          right: true,
          name: 'Space Invader',
          text:
            'I created this with jQuery and Campus over about a week, 1 months later since when I started learning programming',
          url: 'https://lilycoco-spaceinvaders.netlify.com/',
          imageUrl: '/static/invaders.png',
        },
        {
          id: 2,
          right: false,
          name: 'Tetris',
          text:
            'Probably you know this is the Tetris which is the game used to be very popular in the world. I also created this with jQuery only',
          url: 'https://lilycoco-tetris.netlify.com/',
          imageUrl: '/static/tetris.png',
        },
        {
          id: 3,
          right: true,
          name: 'Mugen Sweeper',
          text:
            'This is unusual minesweeper which has unlimited field and enable to play with multiple players, developed with Node.js, Nuxt.js and Vue.js',
          url: 'https://mugensweeper.netlify.com/',
          imageUrl: '/static/mugen.png',
        },
      ]

      return {
        contents: json,
      }
    } catch (e) {
      console.error(e)
      return {
        contents: [],
      }
    }
  }

  public render() {
    return (
      <MainContent>
        <MainTitle>What's New?</MainTitle>
        <Products contents={this.props.contents} />
      </MainContent>
    )
  }
}
