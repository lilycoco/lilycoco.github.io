import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { Text } from '../components/article/Text'

export default function Article() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <Text />
    </Layout>
  )
}
