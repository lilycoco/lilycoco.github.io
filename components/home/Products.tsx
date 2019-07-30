import * as React from 'react'
import { Tron } from '../../models/Tron'
import { Ul, Li, Img, Content, TextWrapper, H1, Text, BtnWrapper } from './Style'
import { LikeButton } from './LikeButton'
import Link from 'next/link'

const btnStyle: React.CSSProperties = {
  marginLeft: '40%',
  width: '70px',
}

export const Products: React.SFC<{
  contents: Tron[]
  onClick: (icon: string, id: number) => void
}> = (props) => {
  const renderLikeButton = (icon: string, c: Tron) => (
    <LikeButton content={c} icon={icon} onClick={(i: string, id: number) => props.onClick(i, id)} />
  )

  return (
    <Ul>
      {props.contents.map((c) => (
        <Li key={c.id}>
          <Img src={c.imgSrc} />
          <Content>
            <TextWrapper>
              <H1>{c.name}</H1>
              <Text>{c.text}</Text>
              <BtnWrapper>
                {renderLikeButton('like', c)}
                {renderLikeButton('heart', c)}
                <Link href={c.url}>
                  <a className='btn btn-primary' style={btnStyle}>
                    Play
                  </a>
                </Link>
              </BtnWrapper>
            </TextWrapper>
          </Content>
        </Li>
      ))}
    </Ul>
  )
}
