import * as React from 'react'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/layouts/Layout'
import { Text } from '../components/article/Text'

export default function Article() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <Text />
    </Layout>
  )
}
