import * as React from 'react'
import { withRouter } from 'next/router'
import Readme from '../../text/text.md'

export const TextPreviewer = withRouter((props: { router: { query: { id: string } } }) => {
  return (
    <div>
      <h1>{props.router.query.id}</h1>
      <div className='markdown'>
        <Readme />
      </div>
    </div>
  )
})
