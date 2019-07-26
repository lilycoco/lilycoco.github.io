import Link from 'next/link'
import { BtnWrapper, IconWrapper, Icon, Num } from './Style'

const btnStyle: React.CSSProperties = {
  marginLeft: '40%',
  width: '70px',
}

const likeAction = (like: number) => {
  return like ? '/static/icon/like_on.png' : '/static/icon/like_off.png'
}

const heartAction = (heart: number) => {
  return heart ? '/static/icon/heart_on.png' : '/static/icon/heart_off.png'
}

export const LikeButton = (props: { c: any; index: number; onClick: any }) => {
  const { c } = props
  return (
    <BtnWrapper>
      <IconWrapper onClick={() => props.onClick(props.index)}>
        <Icon src={likeAction(c.like)} />
        <Num>{c.like}</Num>
      </IconWrapper>
      <IconWrapper onClick={() => props.onClick(props.index + 10)}>
        <Icon src={heartAction(c.heart)} />
        <Num>{c.heart}</Num>
      </IconWrapper>
      <Link href={c.url}>
        <a className='btn btn-primary' style={btnStyle}>
          Play
        </a>
      </Link>
    </BtnWrapper>
  )
}
