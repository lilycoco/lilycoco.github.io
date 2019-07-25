export const blockShape = [
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

export const initialBoard = Array(20).fill(Array(10).fill(0))

export const addNewBlockToBoard = (
  currentBoard: number[][],
  position: { [key: string]: number },
  blockParams: { [key: string]: number },
) =>
  currentBoard.map((line: number[], lineIndex: number) =>
    line.map((block: number, blockIndex: number) => {
      const { x, y } = position
      const { color, shape } = blockParams
      const currentBlock = blockShape[shape]
      if (
        lineIndex >= y &&
        blockIndex >= x &&
        currentBlock.length > lineIndex - y &&
        currentBlock[0].length > blockIndex - x &&
        currentBlock[lineIndex - y][blockIndex - x] === 1
      ) {
        return color
      } else {
        return block
      }
    }),
  )

export const updateBoard = (currentBoard: number[][]) => {
  const findDeleteRow = currentBoard
    .concat()
    .reverse()
    .findIndex((line): boolean => line.every((block: number) => block !== 0))

  if (findDeleteRow >= 0) {
    let refleshedBoard = currentBoard.concat()
    refleshedBoard.splice(19 - findDeleteRow, 1)
    refleshedBoard.unshift(Array(10).fill(0))
    return refleshedBoard
  } else {
    return null
  }
}

export const checkForward = (
  currentPosition: number,
  key: string,
  position: { [key: string]: number },
  currentShape: number,
  board: number[][],
) =>
  !blockShape[currentShape].some((line, lineIndex) =>
    line.some((block, blockIndex) => {
      const hasBlock = 1
      const blockSize = 1
      const aBlockDown = currentPosition + lineIndex + blockSize
      const aBlockRight = currentPosition + blockIndex + blockSize
      const { x, y } = position
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
            (currentPosition <= 0 ||
              (currentPosition > 0 &&
                board[y + lineIndex][currentPosition + blockIndex - blockSize] !== 0))
          )
      }
    }),
  )

export const judgeGameOver = (board: number[][]) => {
  for (let i = 0; i < 4; i++) {
    for (let n = 4; n < 8; n++) {
      if (board[i][n]) {
        return true
      }
    }
  }
}
