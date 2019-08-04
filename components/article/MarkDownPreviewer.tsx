import * as React from 'react'
import { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

export const MarkDownPreviewer = ({ posts }: any) => {
  const [BlogArticle, setBlogArticle] = useState(<div></div>)
  useEffect(() => {
    setBlogArticle(require('../../static/blog/' + posts.fname).default)
  }, [])

  return (
    <div>
      <article className='post'>
        <div className='center'>
          <h1>{posts.title}</h1>
          <time className='code'>{moment(posts.date).format('MMMM DD, Y')}</time>
        </div>
        <div className='divider'></div>
        {BlogArticle}
      </article>
      <div className='page-navigation code'>
        <Link href='/blog'>
          <a title='back to index'>Index</a>
        </Link>
      </div>
    </div>
  )
}
