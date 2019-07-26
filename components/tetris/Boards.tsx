import { GameOverSign } from './GameOverSign'
import { Board } from './Board'
import { BoardWrapper, BoardArea } from './Style'

export const Boards = (props: { board: number[][]; gameOver: boolean }) => {
  return (
    <BoardArea>
      <BoardWrapper>
        <Board currentBoard={props.board} />
      </BoardWrapper>
      {props.gameOver ? <GameOverSign /> : null}
    </BoardArea>
  )
}
