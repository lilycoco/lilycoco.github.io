import React, { useState, useEffect, useRef } from 'react'
import { Boards } from './Boards'
import { Buttons } from './Buttons'
import {
  blockShape,
  initialBoard,
  addNewBlockToBoard,
  updateBoard,
  checkForward,
  judgeGameOver,
} from '../../lib/tetris'

export const Game = () => {
  const [currentBlock, setCurrentBlock] = useState({ color: 1, shape: 0 })
  const [running, setRunning] = useState(false)
  const [position, setPosition] = useState({ x: 4, y: -blockShape[currentBlock.shape].length })
  const [baseBoard, setBaseBoard] = useState(initialBoard)
  const [gameOver, setGameOver] = useState(false)
  const intervalRef = useRef()
  const updatedBaseBoard = updateBoard(baseBoard)
  const blockSize = 1

  const rotateCurrentBlock = () => {
    const randomColor = Math.floor(Math.random() * 6) + 1
    const randomShape = Math.floor(Math.random() * 27)
    setCurrentBlock({ color: randomColor, shape: randomShape })
  }

  const addedNewBlockBoard = (currentBoard: number[][]) =>
    addNewBlockToBoard(currentBoard, position, currentBlock)

  const canGoForward = (currentPosition: number, key: string) =>
    checkForward(currentPosition, key, position, currentBlock.shape, baseBoard)

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
        setCurrentBlock((b) => ({
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
        rotateCurrentBlock()
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

  const toggleRunning = () => setRunning(!running)

  const clearAll = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setGameOver(false)
    setBaseBoard(initialBoard)
    setPosition({ x: 4, y: -blockShape[currentBlock.shape].length })
  }

  return (
    <div>
      <Boards
        baseBoard={baseBoard}
        newBoard={addedNewBlockBoard(initialBoard)}
        gameOver={gameOver}
      />
      <Buttons toggleRunning={toggleRunning} running={running} clearAll={clearAll} />
    </div>
  )
}
