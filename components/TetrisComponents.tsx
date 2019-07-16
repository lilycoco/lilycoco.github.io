export const BrockShape = [
  //1: 四角
  [[1, 1], [1, 1]], //0
  [[1, 1], [1, 1]], //1
  [[1, 1], [1, 1]], //2
  [[1, 1], [1, 1]], //3
  //2:
  [[1, 1], [0, 1], [0, 1]], //4
  [[0, 0, 1], [1, 1, 1]], //5
  [[1, 0], [1, 0], [1, 1]], //6
  [[1, 1, 1], [1, 0, 0]], //7
  //3:
  [[1, 1], [1, 0], [1, 0]], //8
  [[1, 1, 1], [0, 0, 1]], //9
  [[0, 1], [0, 1], [1, 1]], //10
  [[1, 0, 0], [1, 1, 1]], //11
  //4:
  [[1, 1, 1, 1]], //12
  [[1], [1], [1], [1]], //13
  [[1, 1, 1, 1]], //14
  [[1], [1], [1], [1]], //15
  //5:
  [[0, 1, 0], [1, 1, 1]], //16
  [[1, 0], [1, 1], [1, 0]], //17
  [[1, 1, 1], [0, 1, 0]], //18
  [[0, 1], [1, 1], [0, 1]], //19
  //6:
  [[0, 1], [1, 1], [1, 0]], //20
  [[1, 1, 0], [0, 1, 1]], //21
  [[0, 1], [1, 1], [1, 0]], //22
  [[1, 1, 0], [0, 1, 1]], //23
  //7:
  [[1, 0], [1, 1], [0, 1]], //24
  [[0, 1, 1], [1, 1, 0]], //25
  [[1, 0], [1, 1], [0, 1]], //26
  [[0, 1, 1], [1, 1, 0]], //27
]

export const BoardType = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

export const BrockColors = ['navy', 'darkmagenta', 'orangered', 'yellow', 'deeppink', 'limegreen']

export const DrowBoard = (defaultBoard: number[][]) => {
  return defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} style={{ display: 'flex' }}>
      {line.map((num: number, rowNo: number) => (
        <div
          key={rowNo}
          className={'block ' + (!num && 'clear')}
          style={
            num
              ? {
                  backgroundColor: BrockColors[num - 1],
                  border: '5px outset rgba(255, 255, 255, 0.568)',
                }
              : undefined
          }
        ></div>
      ))}
    </div>
  ))
}

export const ChangeBoard = (
  defaultBoard: number[][],
  x: number,
  y: number,
  currentColor: number,
  currentShape: number,
) => {
  let newBoard = defaultBoard.map((line: number[], lineIndex: number) =>
    line.map((block: number, blockIndex: number) => {
      const currentBlock = BrockShape[currentShape]
      if (
        lineIndex >= y &&
        blockIndex >= x &&
        currentBlock.length > lineIndex - y &&
        currentBlock[0].length > blockIndex - x &&
        currentBlock[lineIndex - y][blockIndex - x] === 1
      ) {
        return currentColor
      } else {
        return block
      }
    }),
  )
  return newBoard
}

export const DeleteRow = (currentBoard: number[][]) => {
  const willDeleteRows = currentBoard
    .slice()
    .reverse()
    .findIndex((line): boolean => line.every((block: number) => block !== 0))

  if (willDeleteRows >= 0) {
    let refleshedBoard = currentBoard
    refleshedBoard.splice(19 - willDeleteRows, 1)
    refleshedBoard.unshift(Array(10).fill(0))
    return refleshedBoard
  } else {
    return null
  }
}

export const CheckForward = (
  position: number,
  key: string,
  x: number,
  y: number,
  currentShape: number,
  board: number[][],
) =>
  !BrockShape[currentShape].some((line, lineIndex) =>
    line.some((block, blockIndex) => {
      const hasBlock = 1
      const blockSize = 1
      const aBlockDown = position + lineIndex + blockSize
      const aBlockRight = position + blockIndex + blockSize
      switch (key) {
        case 'ArrowDown':
          return (
            block === hasBlock &&
            (!board[aBlockDown] || (board[aBlockDown] && board[aBlockDown][blockIndex + x] !== 0))
          )
        case 'ArrowRight':
          return (
            block === hasBlock &&
            (!board[aBlockRight] || (board[aBlockRight] && board[y + lineIndex][aBlockRight] !== 0))
          )
        case 'ArrowLeft':
          return (
            block === hasBlock &&
            (position <= 0 ||
              (position > 0 && board[y + lineIndex][position + blockIndex - blockSize] !== 0))
          )
      }
    }),
  )
