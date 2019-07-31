import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { TextPreviewer } from '../components/article/TextPreviewer'

export default function Article() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <TextPreviewer />
    </Layout>
  )
}
