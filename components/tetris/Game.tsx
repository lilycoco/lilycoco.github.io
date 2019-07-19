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
  const [blockType, setBlockType] = useState({ color: selectColor, shape: selectShape })
  const [running, setRunning] = useState(false)
  const [axes, setAxes] = useState({ x: 4, y: -brockShape[blockType.shape].length })
  const [board, setBoard] = useState(boardType)
  const [over, setOver] = useState(false)
  const intervalRef = useRef()
  const didDeleteRowBoard = deleteRow(board)
  const addBlockToBoard = (currentBoard: number[][]) => changeBoard(currentBoard, axes, blockType)
  const canGoForward = (position: number, key: string) =>
    checkForward(position, key, axes, blockType.shape, board)
  const toggleRunning = () => setRunning(!running)

  const clearAll = () => {
    clearInterval(intervalRef.current)
    setRunning(false)
    setOver(false)
    setBoard(boardType)
    setAxes({ x: 4, y: -brockShape[blockType.shape].length })
  }

  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setAxes((axes) => ({ ...axes, y: canGoForward(axes.y, key) ? axes.y + blockSize : axes.y }))
        break
      case 'ArrowRight':
        setAxes((axes) => ({ ...axes, x: canGoForward(axes.x, key) ? axes.x + blockSize : axes.x }))
        break
      case 'ArrowLeft':
        setAxes((axes) => ({ ...axes, x: canGoForward(axes.x, key) ? axes.x - blockSize : axes.x }))
        break
      case 'ArrowUp':
        setBlockType((blockType) => ({
          ...blockType,
          shape: (blockType.shape + 1) % 4 === 0 ? blockType.shape - 3 : blockType.shape + 1,
        }))
    }
  }

  const intervalProcessing = () => {
    if (running) {
      judgeGameOver(board) && setOver(true)
      if (canGoForward(axes.y, 'ArrowDown')) {
        setAxes((axes) => ({ ...axes, y: axes.y + blockSize }))
        didDeleteRowBoard && setBoard(didDeleteRowBoard)
      } else {
        setBoard(addBlockToBoard(board))
        setAxes({ x: 4, y: 0 })
        setBlockType({ color: selectColor, shape: selectShape })
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
