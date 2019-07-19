import React, { useState, useEffect, useRef } from 'react'
import { DrowGameOver } from './DrowGameOver'
import { DrowBoard } from './DrowBoard'
import { BoardWrapperStyle, BoardStyle, btnStyle } from '../../styled/Tetris'
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
  const canDeleteRow = deleteRow(board)
  const addBlockToBoard = (currentBoard: number[][]) =>
    changeBoard(currentBoard, x, y, currentColor, currentShape)
  const baseBoard = DrowBoard(board)
  const newboard = DrowBoard(addBlockToBoard(boardType))
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
      case 'ArrowUp':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  const intervalProcessing = () => {
    if (running) {
      if (judgeGameOver(board)) {
        setOver(true)
        setRunning(false)
      }
      if (canGoForward(y, 'ArrowDown')) {
        setY((currentY) => currentY + blockSize)
        canDeleteRow && setBoard(canDeleteRow)
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
    const flowBlock: any = setInterval(intervalProcessing, 600)
    intervalRef.current = flowBlock
    if (over) {
      clearInterval(intervalRef.current)
    }
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
        {over ? <DrowGameOver /> : null}
      </BoardWrapperStyle>
      <button
        className='btn btn-primary'
        onClick={handleRunClick}
        children={running ? 'Stop' : 'Start'}
        style={btnStyle}
      />
      <button
        className='btn btn-primary'
        onClick={handleClearClick}
        children={'Clear'}
        style={btnStyle}
      />
    </div>
  )
}
