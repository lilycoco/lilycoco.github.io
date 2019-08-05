import * as React from 'react'
import moment from 'moment'
import MarkdownIt from 'markdown-it'

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const hightlightPlugin = require('markdown-it-highlightjs')
const md = MarkdownIt({ linkify: true }).use(hightlightPlugin)

export const MarkDownPreviewer = ({ posts }: any) => (
  <article className='post'>
    <div className='center'>
      <h1>{posts.title}</h1>
      <time className='code'>{moment(posts.date).format('MMMM DD, Y')}</time>
    </div>
    <div className='divider'></div>
    <div className='markdown' dangerouslySetInnerHTML={{ __html: md.render(posts.html) }} />
  </article>
)
