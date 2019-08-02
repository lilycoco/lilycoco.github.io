import Link from 'next/link'
import { btnStyle } from '../../style/Home'
import { BtnWrapper } from './Style'
import { LikeButton } from './LikeButton'
import { ProductConstructor } from '../../models/Home'

export const Buttons = (props: {
  item: ProductConstructor
  onClick: (icon: string, id: number) => void
}) => {
  const { item } = props
  const renderLikeButton = (icon: string, item: ProductConstructor) => (
    <LikeButton
      content={item}
      icon={icon}
      onClick={(i: string, id: number) => props.onClick(i, id)}
    />
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
