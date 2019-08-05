import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardColumns } from 'react-bootstrap'
import { reversedProductList, addPoint } from '../../lib/home'
import { btnStyle } from '../../style/Home'
import { ProductConstructor } from '../../models/Home'
import { LikeButton } from '../home/LikeButton'
import { BtnWrapper } from '../home/Style'

export const ProductCard = () => {
  const [content, setContent] = useState(reversedProductList)
  const addedPointContent = (icon: string, id: number) => setContent(addPoint(content, icon, id))
  const renderLikeButton = (icon: string, item: ProductConstructor) => (
    <LikeButton
      item={item}
      icon={icon}
      onClick={(i: string, id: number) => addedPointContent(i, id)}
    />
  )
  return (
    <CardColumns>
      {content.map((item) => (
        <Card key={item.id} style={{ width: '18rem' }} bg='light'>
          <Card.Img variant='top' src={item.imgSrc} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <BtnWrapper>
              {renderLikeButton('like', item)}
              {renderLikeButton('heart', item)}
              <Link href={item.url}>
                <a className='btn btn-primary' style={btnStyle}>
                  Play
                </a>
              </Link>
            </BtnWrapper>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  )
}
