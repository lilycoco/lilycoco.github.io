import { Block } from './Style'

export const Board: any = (props: { currentBoard: number[][] }) =>
  props.currentBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <Block key={rowNo} color={num} />
      ))}
    </div>
  ))
