import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { BrockShape, BoardType, BrockColors } from '../components/TetrisComponent'

const drowBoard = (defaultBoard: number[][]) => {
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

function changeBoard(
  defaultBoard: number[][],
  x: number,
  y: number,
  currentColor: number,
  currentShape: number,
) {
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

function deleteRow(currentBoard: number[][]) {
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

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 6) + 1
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-BrockShape[currentShape].length)
  const [board, setBoard] = useState(BoardType)

  const baseBoard = drowBoard(board)
  const newboard = drowBoard(changeBoard(BoardType, x, y, currentColor, currentShape))
  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}
  const blockSize = 1
  const hasBlock = 1

  const checkForward = (position: number, key: string) =>
    !BrockShape[currentShape].some((line, lineIndex) =>
      line.some((block, blockIndex) => {
        switch (key) {
          case 'ArrowDown':
            return (
              block === hasBlock &&
              (!board[position + lineIndex + blockSize] ||
                (board[position + lineIndex + blockSize] &&
                  board[position + lineIndex + blockSize][blockIndex + x] !== 0))
            )
          case 'ArrowRight':
            return (
              block === hasBlock &&
              (!board[position + blockIndex + blockSize] ||
                (board[position + blockIndex + blockSize] &&
                  board[y + lineIndex][position + blockIndex + blockSize] !== 0))
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

  const downHandler = ({ key }: any) => {
    console.log(checkForward(y, key))
    switch (key) {
      case 'ArrowDown':
        setY((y) => (checkForward(y, key) ? y + blockSize : y))
        break
      case 'ArrowRight':
        setX((x) => (checkForward(x, key) ? x + blockSize : x))
        break
      case 'ArrowLeft':
        setX((x) => (checkForward(x, key) ? x - blockSize : x))
        break
      case 'Enter':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(() => {
      if (running) {
        if (checkForward(y, 'ArrowDown')) {
          setY((y) => y + blockSize)
        } else {
          setBoard(changeBoard(board, x, y, currentColor, currentShape))
          setY(0)
          setX(4)
          setCurrentShape(selectShape)
          setCurrentColor(selectColor)
        }
      }
    }, 600)
    return () => {
      const row = deleteRow(board)
      if (row) {
        setBoard(row)
      }
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
      {/* <label style={{ fontSize: '5em', display: 'block' }}>{y}</label> */}
      <style>
        {`
        .boardWrapper {
          position: relative;
          width: 300px;
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
        .btn {
          margin: 20px 10px;
          width: 100px;
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
