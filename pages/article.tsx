import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { getBlogContent } from '../lib/blog'
import { ArticleContainer } from '../components/article/ArticleContainer'
import { withRouter } from 'next/router'
import fm from 'front-matter'

const Article = (props: any) => (
  <Layout>
    <MainTitle>My Blog</MainTitle>
    <ArticleContainer posts={props} />
  </Layout>
)

const getInitialProps = async ({ query }: any) => {
  const fname = `${query.id}.md`
  const post: any = await getBlogContent(fname)
  const meta: any = fm(post)
  return {
    title: meta.attributes.title,
    date: fname.split('-')[0],
    html: meta.body,
  }
}

Article.getInitialProps = getInitialProps
export default withRouter(Article)
