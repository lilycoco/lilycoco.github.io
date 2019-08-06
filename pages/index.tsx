import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Cover } from '../components/index/Cover'
import { CardList } from '../components/index/CardList'

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Cover />
        <CardList />
      </Layout>
    )
  }
}
