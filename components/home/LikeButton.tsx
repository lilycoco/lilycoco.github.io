import { IconWrapper, Icon, Num } from './Style'

export const LikeButton = (props: { content: any; icon: string; onClick: any }) => {
  const { content, icon } = props
  const point = () => {
    switch (icon) {
      case 'like':
        return content.like
      case 'heart':
        return content.heart
    }
  }
  return (
    <div>
      <IconWrapper onClick={() => props.onClick(props.icon, content.id)}>
        <Icon src={{ icon: icon, num: point() }} />
        <Num>{point()}</Num>
      </IconWrapper>
    </div>
  )
}
