import * as React from 'react'
import { Tron } from '../../models/Tron'
import { Ul, Li, Img, Content, TextWrapper, H1, Text, BtnWrapper } from './Style'
import { LikeButton } from './LikeButton'
import Link from 'next/link'

const btnStyle: React.CSSProperties = {
  marginLeft: '40%',
  width: '70px',
}

export const Products: React.SFC<{ contents: Tron[]; onClick: any }> = (props) => {
  const renderLikeButton = (icon: string, c: any) => (
    <LikeButton content={c} icon={icon} onClick={(i: string, n: number) => props.onClick(i, n)} />
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
