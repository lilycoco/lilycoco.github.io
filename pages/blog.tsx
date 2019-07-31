import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../styled/Page'
import { BlogList } from '../components/blog/BlogList'

export default function Blog() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <BlogList />
    </Layout>
  )
}
