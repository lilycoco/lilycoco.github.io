import * as React from 'react'
import { Tron } from '../../models/Tron'
import { Ul, Li, Img, Content, TextWrapper, H1, Text } from './Style'
import { LikeButton } from './LikeButton'

export const Products: React.SFC<{ contents: Tron[]; onClick: any }> = (props) => (
  <Ul>
    {props.contents.map((c, index) => (
      <Li key={c.id} primary={c.right}>
        <Img src={c.imgSrc} />
        <Content>
          <TextWrapper>
            <H1>{c.name}</H1>
            <Text>{c.text}</Text>
            <LikeButton c={c} index={index} onClick={(i: any) => props.onClick(i)} />
          </TextWrapper>
        </Content>
      </Li>
    ))}
  </Ul>
)
