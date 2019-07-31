import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { CoverImage } from '../components/index/CoverImage'

export default class CoverPage extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <CoverImage />
      </Layout>
    )
  }
}
