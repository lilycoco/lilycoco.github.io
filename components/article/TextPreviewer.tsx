import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'next/router'
import { title, text } from '../../text/blog_1'

export const TextPreviewer = withRouter((props: { router: { query: { id: string } } }) => (
  <div>
    <h1>
      {props.router.query.id}
      {title}
    </h1>
    <div className='markdown'>
      <ReactMarkdown source={text} />
    </div>
    <style>{`
      .markdown {
        font-family: 'Arial';
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
        h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      }
      
    `}</style>
  </div>
))
