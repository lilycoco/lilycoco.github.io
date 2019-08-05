import * as React from 'react'
import { useState } from 'react'
import { reversedProductList, addPoint } from '../../lib/index'
import { ProductCard } from './ProductCard'

export const CardList = () => {
  const [content, setContent] = useState(reversedProductList)
  const addedPointContent = (icon: string, id: number) => setContent(addPoint(content, icon, id))
  return (
    <div className='album py-5 bg-light'>
      <div className='container'>
        <div className='row'>
          {content.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onClick={(i: string, id: number) => addedPointContent(i, id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
