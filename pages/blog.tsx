import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { getBlogLists } from '../lib/blog'
import { BlogList } from '../components/blog/BlogList'
import { BlogConfig } from '../models/Blog'

const Blog = (props: { posts: BlogConfig[] }) => {
  return (
    <Layout>
      <MainTitle>Blog</MainTitle>
      <BlogList posts={props.posts} />
    </Layout>
  )
}

const getInitialProps = async () => {
  const posts = await getBlogLists()
  return { posts }
}

Blog.getInitialProps = getInitialProps
export default Blog
