import * as React from 'react'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/layouts/Layout'
import { BlogList } from '../components/blog/BlogList'

export default function Blog() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <BlogList />
    </Layout>
  )
}
