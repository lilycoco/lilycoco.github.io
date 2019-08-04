import * as React from 'react'
import { Layout } from '../components/layouts/Layout'
import { MainTitle } from '../components/Style'
import { BlogList } from '../components/blog/BlogList'
import { getBlogLists } from '../lib/blog'

const Blog = (props: { posts: any }) => {
  return (
    <Layout>
      <MainTitle>My Blog</MainTitle>
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
