import * as React from 'react'
import { MainTitle } from '../styled/Page'
import { Layout } from '../components/Layout'
import { ArticleLink } from '../components/blog/ArticleLink'

export default function Blog() {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
      <ul>
        <ArticleLink id={1} title='Hello Next.js' />
        <ArticleLink id={2} title='Learn Next.js is awesome' />
        <ArticleLink id={3} title='Deploy apps with Zeit' />
      </ul>
    </Layout>
  )
}
