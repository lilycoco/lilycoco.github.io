import * as React from 'react'
import { Tron } from '../../models/Tron'
import { Ul, Li, Img, Content, TextWrapper, H1, Text } from './Style'
import { Buttons } from './Buttons'

export const Products: React.SFC<{
  contents: Tron[]
  onClick: (icon: string, id: number) => void
}> = (props) => {
  return (
    <Ul>
      {props.contents.map((item) => (
        <Li key={item.id}>
          <Img src={item.imgSrc} />
          <Content>
            <TextWrapper>
              <H1>{item.name}</H1>
              <Text>{item.text}</Text>
              <Buttons item={item} onClick={props.onClick} />
            </TextWrapper>
          </Content>
        </Li>
      ))}
    </Ul>
  )
}
