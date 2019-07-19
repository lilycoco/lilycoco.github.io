import React, { useState, useEffect, useRef } from 'react'
import { GameOverSign } from './GameOverSign'
import { Board } from './Board'
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
  const [baseBoard, setBaseBoard] = useState(boardType)
  const [gameOver, setGameOver] = useState(false)
  const intervalRef = useRef()
  const canDeleteRow = deleteRow(baseBoard)
  const addBlockToBoard = (currentBoard: number[][]) =>
    changeBoard(currentBoard, x, y, currentColor, currentShape)
  const canGoForward = (position: number, key: string) =>
    checkForward(position, key, x, y, currentShape, baseBoard)
  const handleRunClick = () => setRunning(!running)

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setGameOver(false)
    setBaseBoard(boardType)
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
      judgeGameOver(baseBoard) && setGameOver(true)
      if (canGoForward(y, 'ArrowDown')) {
        setY((currentY) => currentY + blockSize)
        canDeleteRow && setBaseBoard(canDeleteRow)
      } else {
        setBaseBoard(addBlockToBoard(baseBoard))
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
        <BoardStyle>
          <Board defaultBoard={baseBoard} />
        </BoardStyle>
        <BoardStyle>
          <Board defaultBoard={addBlockToBoard(boardType)} />
        </BoardStyle>
        {gameOver ? <GameOverSign ref={intervalRef} /> : null}
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
