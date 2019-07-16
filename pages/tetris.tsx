import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import {
  BrockShape,
  BoardType,
  DrowBoard,
  ChangeBoard,
  DeleteRow,
} from '../components/TetrisComponents'

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 6) + 1
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-BrockShape[currentShape].length)
  const [board, setBoard] = useState(BoardType)

  const baseBoard = DrowBoard(board)
  const newboard = DrowBoard(ChangeBoard(BoardType, x, y, currentColor, currentShape))
  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}
  const blockSize = 1
  const hasBlock = 1

  const checkForward = (position: number, key: string) =>
    !BrockShape[currentShape].some((line, lineIndex) =>
      line.some((block, blockIndex) => {
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
              (!board[aBlockRight] ||
                (board[aBlockRight] && board[y + lineIndex][aBlockRight] !== 0))
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
    switch (key) {
      case 'ArrowDown':
        setY((currentY) => (checkForward(currentY, key) ? currentY + blockSize : currentY))
        break
      case 'ArrowRight':
        setX((currentX) => (checkForward(currentX, key) ? currentX + blockSize : currentX))
        break
      case 'ArrowLeft':
        setX((currentX) => (checkForward(currentX, key) ? currentX - blockSize : currentX))
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
          setY((currentY) => currentY + blockSize)
        } else {
          setBoard(ChangeBoard(board, x, y, currentColor, currentShape))
          setY(0)
          setX(4)
          setCurrentShape(selectShape)
          setCurrentColor(selectColor)
        }
      }
    }, 600)
    return () => {
      const row = DeleteRow(board)
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
