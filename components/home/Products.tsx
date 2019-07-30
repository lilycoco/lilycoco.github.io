import * as React from 'react'
import { Tron } from '../../models/Tron'
import { Ul, Li, Img } from './Style'
import { ContentBox } from './ContentBox'

export const Products: React.SFC<{
  contents: Tron[]
  onClick: (icon: string, id: number) => void
}> = (props) => (
  <Ul>
    {props.contents.map((item) => (
      <Li key={item.id}>
        <Img src={item.imgSrc} />
        <ContentBox item={item} onClick={props.onClick} />
      </Li>
    ))}
  </Ul>
)
