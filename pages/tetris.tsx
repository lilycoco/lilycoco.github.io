import React, { useState, useEffect, useReducer } from 'react'
import { Layout } from '../components/Layout'
import { BrockShape, BoardType, BrockColors } from '../components/TetrisComponent'
import tetrisStyles from '../styled/Tetris'

const boardStyle = (defaultBoard: number[][]) => {
  return defaultBoard.map((line: number[], colNo: number) => (
    <div key={colNo} className='line'>
      {line.map((num: number, rowNo: number) => (
        <div
          key={rowNo}
          className={'block ' + (num === 0 && 'clear')}
          style={num > 0 ? { backgroundColor: BrockColors[num - 1] } : undefined}
        >
          {num}
        </div>
      ))}
      <style jsx>{tetrisStyles}</style>
    </div>
  ))
}

function drowBoard(
  defaultBoard: number[][],
  x: number,
  y: number,
  currentColor: number,
  currentShape: number,
  running: boolean,
) {
  let newBoard = defaultBoard
  if (running) {
    console.log(currentShape)
    newBoard = defaultBoard.map((line: number[], lineIndex: number) =>
      line.map((block: number, blockIndex: number) => {
        const currentBlock = BrockShape[currentShape]
        if (
          lineIndex - y >= 0 &&
          blockIndex - x >= 0 &&
          currentBlock.length > lineIndex - y &&
          currentBlock[0].length > blockIndex - x &&
          currentBlock[lineIndex - y][blockIndex - x] === 1
        ) {
          return block + currentColor
        } else {
          return block
        }
      }),
    )
  }
  return newBoard
}

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 5)
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-BrockShape[currentShape].length)
  const [board, setBoard] = useState(BoardType)

  console.log(currentShape)
  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setY((y) => (y + BrockShape[currentShape].length < 20 ? y + 1 : y))
        break
      case 'ArrowLeft':
        setX((x) => (x > 0 ? x - 1 : x))
        break
      case 'ArrowRight':
        console.log(currentShape)
        setX((x) => (x + BrockShape[currentShape][0].length < 10 ? x + 1 : x))
        break
      case 'Enter':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(() => {
      // if(!(y + BrockShape[currentShape].length >= 20)) {
      //   setCurrentShape(selectShape)
      //   setCurrentColor(selectColor)
      //   setBoard(drowBoard(board, x, y, currentColor, currentShape, running))
      // }
      setY((y) => (y + BrockShape[currentShape].length < 20 ? y + 1 : 0))
    }, 1000)
    return () => {
      window.addEventListener('keydown', downHandler)
      clearInterval(flowBlock)
    }
  }, [])

  // const baseBoard = boardStyle(board)
  const newboard = boardStyle(drowBoard(BoardType, x, y, currentColor, currentShape, running))
  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}

  return (
    <div>
      <div className='boardWrapper'>
        {/* <div className='board'>{baseBoard}</div> */}
        <div className='newBoard'>{newboard}</div>
      </div>
      <button className='btn btn-primary' onClick={() => handleRunClick()}>
        {running ? 'Stop' : 'Start!'}
      </button>
      <button className='btn btn-primary' onClick={() => handleClearClick()}>
        Clear
      </button>
      <label style={{ fontSize: '5em', display: 'block' }}>{y}</label>
      <style jsx>{tetrisStyles}</style>
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
