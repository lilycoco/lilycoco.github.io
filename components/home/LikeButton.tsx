import { IconWrapper, Icon, Num } from './Style'

export const LikeButton = (props: { point: number; id: number; icon: string; onClick: any }) => {
  return (
    <div>
      <IconWrapper onClick={() => props.onClick(props.id)}>
        <Icon src={{ icon: props.icon, num: props.point }} />
        <Num>{props.point}</Num>
      </IconWrapper>
    </div>
  )
}
