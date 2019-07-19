import styled from 'styled-components'

const brockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']

export const BlockStyle = styled.div<{ color: any }>`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.253);
  border-collapse: collapse;
  text-align: center;
  box-sizing: border-box;
  color: white;
  line-height: 30px;
  ${(props: any) =>
    props.color
      ? {
          backgroundColor: brockColors[props.color - 1],
          border: '5px outset rgba(255, 255, 255, 0.568)',
        }
      : {
          backgroundColor: 'rgb(254, 254, 254, 0)',
        }};
`

export const Board = (props: { defaultBoard: number[][] }): any =>
  props.defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <BlockStyle key={rowNo} color={num} />
      ))}
    </div>
  ))
