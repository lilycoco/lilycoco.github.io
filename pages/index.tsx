import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { Cover } from '../components/index/Cover'
import { ProductCard } from '../components/index/ProductCard'

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Cover />
        <ProductCard />
      </Layout>
    )
  }
}
