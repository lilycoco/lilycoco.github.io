import Link from 'next/link'
import { btnStyle } from '../../style/Index'
import { BtnWrapper } from './Style'
import { LikeButton } from '../index/LikeButton'
import { ProductConstructor, ProductConfig } from '../../models/Index'

export const Buttons = ({ item, onClick }: ProductConfig) => {
  const renderLikeButton = (icon: string, item: ProductConstructor) => (
    <LikeButton item={item} icon={icon} onClick={(i: string, id: number) => onClick(i, id)} />
  )
  return (
    <BtnWrapper>
      {renderLikeButton('like', item)}
      {renderLikeButton('heart', item)}
      <Link href={item.url}>
        <a className='btn btn-primary' style={btnStyle}>
          Play
        </a>
      </Link>
    </BtnWrapper>
  )
}
