import * as React from 'react'
import { useState } from 'react'
import { Ul, Li, Img } from './Style'
import { ContentBox } from './ContentBox'
import { reversedContentsList, addPoint } from '../../lib/home'

export const Products = () => {
  const [content, setContent] = useState(reversedContentsList)
  const addedPointContent = (icon: string, id: number) => setContent(addPoint(content, icon, id))

  return (
    <Ul>
      {content.map((item) => (
        <Li key={item.id}>
          <Img src={item.imgSrc} />
          <ContentBox
            item={item}
            onClick={(icon: string, id: number) => addedPointContent(icon, id)}
          />
        </Li>
      ))}
    </Ul>
  )
}
