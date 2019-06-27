import * as React from 'react'

import { ECurry } from '../models/Curry'
import { CurryList } from '../components/CurryList'
import { MainTitle, MainContent } from '../styled/Page'
// import fetch from "isomorphic-unfetch";

interface EProps {
  curries: ECurry[]
}

export default class BlogsPage extends React.Component<EProps> {
  static async getInitialProps() {
    try {
      // const response = await fetch('https://??????.???/curries/india');
      // const json = await response.json();

      // 通常では上記のように外部APIサーバーに対してデータを取得しにいきますが、今回は簡潔に済ますために
      // static async getInitialProps() で直接データを returnすることにします。
      // 下記のデータがAPIサーバーから返ってくると想定して、進めます。
      // 画像はpixabay様の著作権フリー・帰属表示不要の画像を使っています。
      // https://pixabay.com/ja/
      const json: ECurry[] = [
        {
          id: 1,
          name: 'Curry1',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 2,
          name: 'Curry2',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 3,
          name: 'Curry3',
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
        <MainTitle>Indian Curries</MainTitle>
        <CurryList curries={this.props.curries} />
      </MainContent>
    )
  }
}
