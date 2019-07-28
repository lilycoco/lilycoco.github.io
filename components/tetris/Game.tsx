import React, { useState, useEffect, useRef } from 'react'
import { Board } from './Board'
import { GameOverSign } from './GameOverSign'
import { BoardArea, BoardWrapper } from './Style'
import { Buttons } from './Buttons'
import {
  blockShape,
  initialBoard,
  addNewBlockToBoard,
  DeleteALineOfBlockOnBoard,
  checkForward,
  judgeGameOver,
} from '../../lib/tetris'

export const Game = () => {
  const [currentBlock, setCurrentBlock] = useState({ color: 1, shape: 0 })
  const [running, setRunning] = useState(false)
  const [currentBlockPosition, setCurrentBlockPosition] = useState({
    x: 4,
    y: -blockShape[currentBlock.shape].length,
  })
  const [currentBoard, setCurrentBoard] = useState(initialBoard)
  const [gameOver, setGameOver] = useState(false)
  const intervalRef = useRef()
  const DeletedALineOfBlockBoard = DeleteALineOfBlockOnBoard(currentBoard)
  const blockSize = 1

  const rotateCurrentBlock = () => {
    const randomColor = Math.floor(Math.random() * 6) + 1
    const randomShape = Math.floor(Math.random() * 27)
    setCurrentBlock({ color: randomColor, shape: randomShape })
  }

  const addedNewBlockBoard = () =>
    addNewBlockToBoard(currentBoard, currentBlockPosition, currentBlock)

  const canGoForward = (positionWhenKeyDown: number, key: string) =>
    checkForward(positionWhenKeyDown, key, currentBlockPosition, currentBlock.shape, currentBoard)

  const downHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'ArrowDown':
        setCurrentBlockPosition((p) => ({
          ...p,
          y: canGoForward(p.y, key) ? p.y + blockSize : p.y,
        }))
        break
      case 'ArrowRight':
        setCurrentBlockPosition((p) => ({
          ...p,
          x: canGoForward(p.x, key) ? p.x + blockSize : p.x,
        }))
        break
      case 'ArrowLeft':
        setCurrentBlockPosition((p) => ({
          ...p,
          x: canGoForward(p.x, key) ? p.x - blockSize : p.x,
        }))
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
      if (judgeGameOver(currentBoard)) {
        setGameOver(true)
        setRunning(false)
      }
      if (canGoForward(currentBlockPosition.y, 'ArrowDown')) {
        setCurrentBlockPosition((p) => ({ ...p, y: p.y + blockSize }))
        DeletedALineOfBlockBoard && setCurrentBoard(DeletedALineOfBlockBoard)
      } else {
        setCurrentBoard(addedNewBlockBoard())
        setCurrentBlockPosition({ x: 4, y: 0 })
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
    setCurrentBoard(initialBoard)
    setCurrentBlockPosition({ x: 4, y: -blockShape[currentBlock.shape].length })
  }

  return (
    <div>
      <BoardArea>
        <BoardWrapper>
          <Board currentBoard={addedNewBlockBoard()} />
        </BoardWrapper>
        {gameOver ? <GameOverSign /> : null}
      </BoardArea>
      <Buttons toggleRunning={toggleRunning} running={running} clearAll={clearAll} />
    </div>
  )
}
