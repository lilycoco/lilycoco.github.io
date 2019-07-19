import React, { useState, useEffect, useRef } from 'react'
import { DrowGameOver } from './DrowGameOver'
import { DrowBoard } from './DrowBoard'
import { BoardWrapper, Board } from './Style'
import { btnStyle } from '../../styled/Tetris'
import {
  brockShape,
  boardType,
  changeBoard,
  deleteRow,
  checkForward,
  judgeGameOver,
} from '../../lib/tetris'

export const Game: any = () => {
  const selectShape = Math.floor(Math.random() * 27)
  const selectColor = Math.floor(Math.random() * 6) + 1
  const blockSize = 1
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-brockShape[currentShape].length)
  const [board, setBoard] = useState(boardType)
  const [over, setOver] = useState(false)
  const intervalRef = useRef()
  const didDeleteRowBoard = deleteRow(board)
  const addBlockToBoard = (currentBoard: number[][]) =>
    changeBoard(currentBoard, x, y, currentColor, currentShape)
  const canGoForward = (position: number, key: string) =>
    checkForward(position, key, x, y, currentShape, board)
  const toggleRunning = () => setRunning(!running)

  const clearAll = () => {
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
      case 'ArrowUp':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  const intervalProcessing = () => {
    if (running) {
      judgeGameOver(board) && setOver(true)
      if (canGoForward(y, 'ArrowDown')) {
        setY((currentY) => currentY + blockSize)
        didDeleteRowBoard && setBoard(didDeleteRowBoard)
      } else {
        setBoard(addBlockToBoard(board))
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
      <BoardWrapper>
        <Board>
          <DrowBoard defaultBoard={board} />
        </Board>
        <Board>
          <DrowBoard defaultBoard={addBlockToBoard(boardType)} />
        </Board>
        {over ? <DrowGameOver ref={intervalRef} /> : null}
      </BoardWrapper>
      <button className='btn btn-primary' onClick={toggleRunning} style={btnStyle}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button className='btn btn-primary' onClick={clearAll} style={btnStyle}>
        Clear
      </button>
    </div>
  )
}
