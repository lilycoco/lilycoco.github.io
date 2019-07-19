import { BlockStyle } from './Style'

export const DrowBoard = (defaultBoard: number[][]) =>
  defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <BlockStyle key={rowNo} color={num} />
      ))}
    </div>
  ))
