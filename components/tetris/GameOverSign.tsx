import { GameOverFilter } from './Style'

export const GameOverSign = (props: { ref: any }) => {
  clearInterval(props.ref)
  return <GameOverFilter>Game Over</GameOverFilter>
}
