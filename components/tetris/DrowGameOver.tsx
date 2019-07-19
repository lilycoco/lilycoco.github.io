import { GameOver } from './Style'

export const DrowGameOver = (props: { ref: any }) => {
  clearInterval(props.ref)
  return <GameOver>Game Over</GameOver>
}
