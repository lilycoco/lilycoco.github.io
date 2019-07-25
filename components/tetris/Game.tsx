import React, { useState, useEffect, useRef } from 'react'
import { GameOverSign } from './GameOverSign'
import { Board } from './Board'
import { BoardArea, BoardWrapper } from './Style'
import { btnStyle } from '../../styled/Tetris'
import {
  blockShape,
  initialBoard,
  addNewBlockToBoard,
  updateBoard,
  checkForward,
  judgeGameOver,
} from '../../lib/tetris'

export const Game: any = () => {
  const initialShape = Math.floor(Math.random() * 27)
  const initialColor = Math.floor(Math.random() * 6) + 1
  const blockSize = 1
  const [blockParams, setBlockParams] = useState({ color: initialColor, shape: initialShape })
  const [running, setRunning] = useState(false)
  const [position, setPosition] = useState({ x: 4, y: -blockShape[blockParams.shape].length })
  const [baseBoard, setBaseBoard] = useState(initialBoard)
  const [gameOver, setGameOver] = useState(false)
  const intervalRef = useRef()
  const updatedBaseBoard = updateBoard(baseBoard)
  const addedNewBlockBoard = (currentBoard: number[][]) =>
    addNewBlockToBoard(currentBoard, position, blockParams)
  const canGoForward = (currentPosition: number, key: string) =>
    checkForward(currentPosition, key, position, blockParams.shape, baseBoard)
  const toggleRunning = () => setRunning(!running)

  const clearAll = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setGameOver(false)
    setBaseBoard(initialBoard)
    setPosition({ x: 4, y: -blockShape[blockParams.shape].length })
  }

  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setPosition((p) => ({ ...p, y: canGoForward(p.y, key) ? p.y + blockSize : p.y }))
        break
      case 'ArrowRight':
        setPosition((p) => ({ ...p, x: canGoForward(p.x, key) ? p.x + blockSize : p.x }))
        break
      case 'ArrowLeft':
        setPosition((p) => ({ ...p, x: canGoForward(p.x, key) ? p.x - blockSize : p.x }))
        break
      case 'ArrowUp':
        setBlockParams((b) => ({
          ...b,
          shape: (b.shape + 1) % 4 === 0 ? b.shape - 3 : b.shape + 1,
        }))
    }
  }

  const intervalProcessing = () => {
    if (running) {
      if (judgeGameOver(baseBoard)) {
        setGameOver(true)
        setRunning(false)
      }
      if (canGoForward(position.y, 'ArrowDown')) {
        setPosition((position) => ({ ...position, y: position.y + blockSize }))
        updatedBaseBoard && setBaseBoard(updatedBaseBoard)
      } else {
        setBaseBoard(addedNewBlockBoard(baseBoard))
        setPosition({ x: 4, y: 0 })
        setBlockParams((b) => ({
          color: b.color < 6 ? b.color + 1 : 1,
          shape: b.shape < 24 ? b.shape + 4 : 27 - b.shape,
        }))
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(intervalProcessing, 600)
    intervalRef.current = flowBlock
    if (gameOver) {
      clearInterval(intervalRef.current)
    }
    return () => {
      window.removeEventListener('keydown', downHandler)
      clearInterval(intervalRef.current)
    }
  }, [intervalProcessing])

  return (
    <div>
      <BoardArea>
        <BoardWrapper>
          <Board currentBoard={baseBoard} />
        </BoardWrapper>
        <BoardWrapper>
          <Board currentBoard={addedNewBlockBoard(initialBoard)} />
        </BoardWrapper>
        {gameOver ? <GameOverSign /> : null}
      </BoardArea>
      <button className='btn btn-primary' onClick={toggleRunning} style={btnStyle}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button className='btn btn-primary' onClick={clearAll} style={btnStyle}>
        Clear
      </button>
    </div>
  )
}
