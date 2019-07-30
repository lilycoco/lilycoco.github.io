import { SquareButton } from './Style'

export const Square = (props: {
  className: string | null
  onClick: React.MouseEventHandler
  value: string
}) => {
  return (
    <SquareButton highlight={props.className} onClick={props.onClick}>
      {props.value}
    </SquareButton>
  )
}
