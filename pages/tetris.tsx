import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '../components/Layout'
import { DrowBoard } from '../components/DrowBoard'
import {
  brockShape,
  boardType,
  changeBoard,
  deleteRow,
  checkForward,
  judgeGameOver,
} from '../components/TetrisComponents'

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 6) + 1
  const blockSize = 1
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-brockShape[currentShape].length)
  const [board, setBoard] = useState(boardType)
  const [over, setOver] = useState(false)
  const baseBoard = DrowBoard(board)
  const newboard = DrowBoard(changeBoard(boardType, x, y, currentColor, currentShape))
  const intervalRef = useRef()
  const canDeleteRow = deleteRow(board)
  const canGoForward = (position: number, key: string) =>
    checkForward(position, key, x, y, currentShape, board)

  const handleRunClick = () => setRunning(!running)

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setOver(false)
    setBoard(boardType)
    setY(-brockShape[currentShape].length)
  }

  const DrowGameOver = () => {
    clearInterval(intervalRef.current)
    return (
      <div className='gameOver'>
        Game Over
        <style>
          {`
        .gameOver {
          color: white;
          font-size: 75px;
          padding: 35px 25px;
          position: absolute;
          width: 100%;
          top: 0px;
          left: 0px;
          background-color: rgb(0, 0, 0, 0.6);
          height: 100%;
          letter-spacing: 0.05em;
        }
        `}
        </style>
      </div>
    )
  }

  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setY((currentY) => (canGoForward(currentY, key) ? currentY + blockSize : currentY))
        break
      case 'ArrowRight':
        setX((currentX) => (canGoForward(currentX, key) ? currentX + blockSize : currentX))
        break
      case 'ArrowLeft':
        setX((currentX) => (canGoForward(currentX, key) ? currentX - blockSize : currentX))
        break
      case 'Enter':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  const intervalProcessing = () => {
    if (running) {
      judgeGameOver(board) && setOver(true)
      if (canGoForward(y, 'ArrowDown')) {
        setY((currentY) => currentY + blockSize)
        canDeleteRow && setBoard(canDeleteRow)
      } else {
        setBoard(changeBoard(board, x, y, currentColor, currentShape))
        setY(0)
        setX(4)
        setCurrentShape(selectShape)
        setCurrentColor(selectColor)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(() => intervalProcessing(), 600)
    intervalRef.current = flowBlock
    return () => {
      window.removeEventListener('keydown', downHandler)
      clearInterval(intervalRef.current)
    }
  }, [intervalProcessing])

  return (
    <div>
      <div className='boardWrapper'>
        <div className='board'>{baseBoard}</div>
        <div className='newBoard'>{newboard}</div>
        {over ? DrowGameOver() : null}
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
