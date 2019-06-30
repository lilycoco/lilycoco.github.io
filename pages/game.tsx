import * as React from 'react'
import { Content } from '../models/Content'
import { ContentsList } from '../components/ContentsList'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'

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
          name: 'Blog 1',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 8,
          name: 'Blog 2',
          imageUrl: '/static/img.jpg',
        },
        {
          id: 9,
          name: 'Blog 3',
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
      <Layout>
        <MainTitle>My Blog</MainTitle>
        <ContentsList contents={this.props.contents} />
      </Layout>
    )
  }
}
