import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '../components/Layout'
import { BrockShape, BoardType, BrockColors } from '../components/TetrisComponent'

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
    </div>
  ))
}

function drowNewBoard(
  defaultBoard: number[][],
  x: number,
  y: number,
  currentColor: number,
  currentShape: number,
  running: boolean,
) {
  let dummy = defaultBoard
  if (running) {
    console.log(currentShape)
    dummy = defaultBoard.map((line: number[], lineIndex: number) =>
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
  console.log(dummy)
  return boardStyle(dummy)
}

function Game() {
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 5)
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const [board, setBoard] = useState(BoardType)
  const [x, setX] = useState(4)
  const [y, setY] = useState(-BrockShape[currentShape].length)
  const intervalRef = useRef()

  const downHandler = ({ key }: any) => {
    switch (key) {
      case 'ArrowDown':
        setY((y) => y + 1)
        break
      case 'ArrowLeft':
        setX((x) => x - 1)
        break
      case 'ArrowRight':
        setX((x) => x + 1)
        break
      case 'Enter':
        setCurrentShape((c) => ((c + 1) % 4 === 0 ? c - 3 : c + 1))
    }
  }
  // console.log(currentShape)

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    const flowBlock: any = setInterval(() => {
      setY((y) => (y + BrockShape[currentShape].length < 20 ? y + 1 : 0))
    }, 1000)
    intervalRef.current = flowBlock
    return () => {
      window.addEventListener('keydown', downHandler)
      clearInterval(intervalRef.current)
    }
  }, [])

  // if(!running){
  //   clearInterval(intervalRef.current)
  // }
  const drowBoard = boardStyle(board)
  const newboard = drowNewBoard(BoardType, x, y, currentColor, currentShape, running)

  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}

  return (
    <div>
      <div className='boardWrapper'>
        {/* <div className='board'>{drowBoard}</div> */}
        <div className='newBoard'>{newboard}</div>
      </div>
      <button className='btn btn-primary' onClick={() => handleRunClick()}>
        {running ? 'Stop' : 'Start!'}
      </button>
      <button className='btn btn-primary' onClick={() => handleClearClick()}>
        Clear
      </button>
      <label style={{ fontSize: '5em', display: 'block' }}>{y}</label>
      <style>
        {`
        .boardWrapper{
          position: relative;
          width: 250px;
          background-color: rgb(15, 15, 27);
          height: 600px;
        }
        .newBoard, .board{
          position: absolute;
          width: 100%;
          top: 0px;
          left: 0px;
        }
        .line {
          display: flex;
        }
        .block {
          width: 30px;
          height: 30px;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0.253);
          border-collapse: collapse;
          text-align: center;
          box-sizing: border-box;
          color: white;
        }
        .clear {
          backgroud-color: rgb(254, 254, 254, 0);
        }
        .color0, .color1, .color2, .color3, .color4, .color5{
          border:5px outset rgba(255, 255, 255, 0.568);
        }
        .btn {
          margin-top: 30px;
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
