import * as React from 'react'
import moment from 'moment'
import MarkdownIt from 'markdown-it'
import { Divider } from '../Style'
import { BlogContent } from '../../models/Blog'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hightlightPlugin = require('markdown-it-highlightjs')
const md = MarkdownIt({ linkify: true }).use(hightlightPlugin)

export const MarkDownPreviewer = ({ posts }: { posts: BlogContent }) => (
  <article className='post'>
    <h1>{posts.title}</h1>
    <time className='code'>{moment(posts.date).format('MMMM DD, Y')}</time>
    <Divider />
    <div className='markdown' dangerouslySetInnerHTML={{ __html: md.render(posts.html) }} />
  </article>
)
