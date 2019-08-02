import * as React from 'react'
import { useState, useEffect } from 'react'
import { withRouter } from 'next/router'

export const TextPreviewer = withRouter((props: { router: { query: { id: string } } }) => {
  const [BlogArticle, setBlogArticle] = useState(<div></div>)

  useEffect(() => {
    setBlogArticle(require('../../text/blog/blog_' + props.router.query.id + '.md').default)
  }, [])

  return <div>{BlogArticle}</div>
})
