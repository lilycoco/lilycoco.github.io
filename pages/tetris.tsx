import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '../components/Layout'
import { DrowGameOver } from '../components/TetrisDrowGameOver'
import { DrowBoard } from '../components/TetrisDrowBoard'
import { BoardWrapperStyle, BoardStyle } from '../styled/TetrisStyle'
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
      <BoardWrapperStyle>
        <BoardStyle>{baseBoard}</BoardStyle>
        <BoardStyle>{newboard}</BoardStyle>
        {over ? DrowGameOver(intervalRef.current) : null}
      </BoardWrapperStyle>
      <button className='btn btn-primary' onClick={handleRunClick}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button className='btn btn-primary' onClick={handleClearClick}>
        Clear
      </button>
      <style>
        {`
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
