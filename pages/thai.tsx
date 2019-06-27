import * as React from 'react'
import { ECurry } from '../models/Curry'
import { CurryList } from '../components/CurryList'
import { MainContent, MainTitle } from '../styled/Page'
// import fetch from "isomorphic-unfetch";

interface EProps {
  curries: ECurry[]
}
export default class BlogsPage extends React.Component<EProps> {
  static async getInitialProps() {
    try {
      // const response = await fetch('https://??????.???/curries/thailand');
      // const json = await response.json();

      // 通常では上記のように外部APIサーバーに対してデータを取得しにいきますが、今回は簡潔に済ますために
      // static async getInitialProps() で直接データを returnすることにします。
      // 下記のデータがAPIサーバーから返ってくると想定して、進めます。

      const json: ECurry[] = [
        {
          id: 7,
          name: 'Curry7',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 8,
          name: 'Curry8',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 9,
          name: 'Curry9',
          imageUrl: '/static/img.jpg',
        },
      ]

      return {
        curries: json,
      }
    } catch (e) {
      console.error(e)
      return {
        curries: [],
      }
    }
  }

  public render() {
    return (
      <MainContent>
        <MainTitle>Thailand Curries</MainTitle>
        <CurryList curries={this.props.curries} />
      </MainContent>
    )
  }
}
