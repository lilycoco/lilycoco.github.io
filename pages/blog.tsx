import * as React from 'react'
import { Content } from '../models/Content'
import { ContentsList } from '../components/ContentsList'
import { MainContent, MainTitle } from '../styled/Page'
// import fetch from "isomorphic-unfetch";

interface EProps {
  contents: Content[]
}
export default class BlogsPage extends React.Component<EProps> {
  static async getInitialProps() {
    try {
      const json: Content[] = [
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
        <MainTitle>My Blog</MainTitle>
        <ContentsList contents={this.props.contents} />
      </MainContent>
    )
  }
}
