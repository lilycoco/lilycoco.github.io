import { GameOverSign } from './GameOverSign'
import { Board } from './Board'
import { BoardWrapper, BoardArea } from './Style'

export const Boards: any = (props: { baseBoard: any; gameOver: boolean; newBoard: any }) => {
  return (
    <BoardArea>
      <BoardWrapper>
        <Board currentBoard={props.baseBoard} />
      </BoardWrapper>
      <BoardWrapper>
        <Board currentBoard={props.newBoard} />
      </BoardWrapper>
      {props.gameOver ? <GameOverSign /> : null}
    </BoardArea>
  )
}
