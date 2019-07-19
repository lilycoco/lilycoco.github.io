import { GameOver } from './Style'

export const DrowGameOver = (props: { ref: any }) => {
  clearInterval(props.ref)
  return <GameOver children={'Game Over'} />
}
