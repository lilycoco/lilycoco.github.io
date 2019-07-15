import React, { useState, useEffect, useReducer, useCallback } from 'react'
import { Layout } from '../components/Layout'
import { BrockShape, BoardType, BrockColors } from '../components/TetrisComponent'

const boardStyle = (defaultBoard: number[][]) => {
  return defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} className='line'>
      {line.map((num: number, rowNo: number) => (
        <div
          key={rowNo}
          className={'block ' + (num === 0 && 'clear')}
          style={num > 0 ? { backgroundColor: BrockColors[num - 1] } : undefined}
        >
          {num}
        </div>
      ))}
    </div>
  ))
}

function drowBoard(
  defaultBoard: number[][],
  x: number,
  y: number,
  currentColor: number,
  currentShape: number,
) {
  let newBoard = defaultBoard
  newBoard = defaultBoard.map((line: number[], lineIndex: number) =>
    line.map((block: number, blockIndex: number) => {
      const currentBlock = BrockShape[currentShape]
      if (
        lineIndex - y >= 0 &&
        blockIndex - x >= 0 &&
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

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 6) + 1
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-BrockShape[currentShape].length)
  const [board, setBoard] = useState(BoardType)

  const baseBoard = boardStyle(board)
  const newboard = boardStyle(drowBoard(BoardType, x, y, currentColor, currentShape))
  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}

  const checkForward = (y: number) =>
    !BrockShape[currentShape].some((line, lineIndex) =>
      line.some(
        (block, blockIndex) =>
          block === 1 &&
          (!board[y + lineIndex + 1] ||
            (board[y + lineIndex + 1] && board[y + lineIndex + 1][blockIndex + x] !== 0)),
      ),
    )

  const checkRight = (x: number) =>
    !BrockShape[currentShape].some((line, lineIndex) =>
      line.some(
        (block, blockIndex) =>
          block === 1 &&
          (!board[x + blockIndex + 1] ||
            (board[x + blockIndex + 1] && board[y + lineIndex][x + blockIndex + 1] !== 0)),
      ),
    )

  const checkLeft = (x: number) =>
    !BrockShape[currentShape].some((line, lineIndex) =>
      line.some(
        (block, blockIndex) =>
          block === 1 && (x <= 0 || (x > 0 && board[y + lineIndex][x + blockIndex - 1] !== 0)),
      ),
    )

  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setY((y) => (checkForward(y) ? y + 1 : y))
        break
      case 'ArrowRight':
        setX((x) => (checkRight(x) ? x + 1 : x))
        break
      case 'ArrowLeft':
        setX((x) => (checkLeft(x) ? x - 1 : x))
        break
      case 'Enter':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  function deleteRow() {
    const willDeleteRow: any[] = []
    console.log(willDeleteRow)
    board.forEach((line) => {
      if (!line.some((block: number) => block === 0)) {
        willDeleteRow.push(line)
      }
    })

    if (willDeleteRow.length > 0) {
      for (let t = board.length - 1; t >= 0; t--) {
        // if(t - willDeleteRow.length > 0 && willDeleteRow[0] >= t) {
        board[t] = board[t - willDeleteRow.length]
        // }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(() => {
      if (running) {
        if (checkForward(y)) {
          setY((y) => y + 1)
        } else {
          setBoard(drowBoard(board, x, y, currentColor, currentShape))
          deleteRow()
          setY(0)
          setCurrentShape(selectShape)
          setCurrentColor(selectColor)
        }
      }
    }, 1000)
    return () => {
      window.removeEventListener('keydown', downHandler)
      clearInterval(flowBlock)
    }
  }, [y, running, currentShape])

  return (
    <div>
      <div className='boardWrapper'>
        <div className='board'>{baseBoard}</div>
        <div className='newBoard'>{newboard}</div>
      </div>
      <button className='btn btn-primary' onClick={handleRunClick}>
        {running ? 'Stop' : 'Start!'}
      </button>
      <button className='btn btn-primary' onClick={handleClearClick}>
        Clear
      </button>
      <label style={{ fontSize: '5em', display: 'block' }}>{y}</label>
      <style>
        {`
        .boardWrapper {
          position: relative;
          width: 250px;
          background-color: rgb(15, 15, 27);
          height: 600px;
        }
        .newBoard,
        .board {
          position: absolute;
          width: 100%;
          top: 0px;
          left: 0px;
        }
        .line {
          display: flex;
        }
        .block {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(0, 0, 0, 0.253);
          border-collapse: collapse;
          text-align: center;
          box-sizing: border-box;
          color: white;
          line-height: 30px;
        }
        .clear {
          background-color: rgb(254, 254, 254, 0);
        }
        .color0,
        .color1,
        .color2,
        .color3,
        .color4,
        .color5 {
          border: 5px outset rgba(255, 255, 255, 0.568);
        }
        .btn {
          margin-top: 30px;
        }
      `}
      </style>
    </div>
  )
}

export default class Tetris extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
