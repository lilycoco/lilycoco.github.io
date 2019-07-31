import { WinnerCondition, SwichButtonConfig } from '../models/Tictac'

export const calculateWinner = (squares: string[]): WinnerCondition | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const line = lines.find(
    (i) => squares[i[0]] && squares[i[0]] === squares[i[1]] && squares[i[0]] === squares[i[2]],
  )
  return line ? { mark: squares[line[0]], numbers: line } : null
}
export const judgeGameStatus = (props: SwichButtonConfig) =>
  props.winner
    ? 'Winner: ' + props.winner.mark
    : props.stepNumber < 9
    ? 'Next player: ' + (props.xIsNext ? 'X' : 'O')
    : 'Draw'
