import * as React from 'react'
import { Content } from '../models/Content'
import { ContentsList } from '../components/ContentsList'
import { MainTitle, MainContent } from '../styled/Page'
// import fetch from "isomorphic-unfetch";

interface EProps {
  contents: Content[]
}

export default class BlogsPage extends React.Component<EProps> {
  static async getInitialProps() {
    try {
      // const response = await fetch('https://pixabay.com/ja');
      // const json = await response.json();

      const json: Content[] = [
        {
          id: 1,
          name: 'Contents 1',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 2,
          name: 'Contents 2',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 3,
          name: 'Contents 3',
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
        <MainTitle>Welcome to my page!</MainTitle>
        <ContentsList contents={this.props.contents} />
      </MainContent>
    )
  }
}
