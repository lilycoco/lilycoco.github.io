import { WProps } from '../models/Tictac'

export const calculateWinner = (squares: string[]): WProps | null => {
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
