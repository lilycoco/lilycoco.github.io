import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { TetrisShape } from '../components/TetrisShape'
import styled from 'styled-components'

const colors = [
  //テトリスの色の配列
  'navy',
  'darkmagenta',
  'orangered',
  'yellow',
  'deeppink',
  'limegreen',
]

function flow(defaultLow: any, running: boolean, currentShape: number) {
  const [low, setLow] = useState(defaultLow)
  const [lat, setLat] = useState(4)

  const calculateLow = low + TetrisShape[currentShape].length < 20 ? low + 1 : 0
  const flowing = setInterval(() => setLow(calculateLow), 1000)
  const downHandler = ({ key }: any) => {
    key === 'ArrowDown' && setLow(low + 1)
    key === 'ArrowLeft' && setLat(lat - 1)
    key === 'ArrowRight' && setLat(lat + 1)
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    flowing
    return function cleanup() {
      clearInterval(flowing)
    }
  })

  if (!running) {
    clearInterval(flowing)
  }
  return { low, lat }
}

const boardStyle = (defaultBoard: any[][]) => {
  return defaultBoard.map((line: any, colNo: number) => (
    <div key={colNo} className='line'>
      {line.map((num: number, rowNo: number) => (
        <div
          key={rowNo}
          className={'block ' + (num === 0 && 'clear')}
          style={num > 0 ? { backgroundColor: colors[num - 1] } : undefined}
        >
          {num}
        </div>
      ))}
    </div>
  ))
}

function drowBoard(defaultBoard: any) {
  const [board, setBoard] = useState(defaultBoard)
  // useEffect(() => {
  // })
  return boardStyle(board)
}

function drowNewBoard(
  defaultBoard: any,
  low: number,
  lat: number,
  currentColor: number,
  currentShape: number,
  running: boolean,
) {
  if (running) {
    TetrisShape[currentShape].map((hei, heiIndex) =>
      hei.map((wid, widIndex) => {
        return wid === 1 && (defaultBoard.slice()[heiIndex + low][widIndex + lat] = currentColor)
      }),
    )
  }
  return boardStyle(defaultBoard)
}

function Game() {
  const boardType = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 5)
  const [currentColor, setCurrentColor] = useState(selectColor)
  const [currentShape, setCurrentShape] = useState(selectShape)
  const [running, setRunning] = useState(false)
  const { low, lat } = flow(
    0,
    running,
    currentShape,
  )
  console.log(low)
  const board = drowBoard(boardType)
  const newboard = drowNewBoard(boardType, low, lat, currentColor, currentShape, running)

  if (low + TetrisShape[currentShape].length >= 20) {
    // setCurrentColor(selectColor)
    // setCurrentShape(selectShape)
  }

  const handleRunClick = () => setRunning(!running)
  const handleClearClick = () => {}

  return (
    <div>
      <div className='boardWrapper'>
        <div className='board'>{board}</div>
        <div className='newBoard'>{newboard}</div>
      </div>
      <button className='btn btn-primary' onClick={() => handleRunClick()}>
        {running ? 'Stop' : 'Start!'}
      </button>
      <button className='btn btn-primary' onClick={() => handleClearClick()}>
        Clear
      </button>
      <label style={{ fontSize: '5em', display: 'block' }}>{low}</label>
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

// ========================================

export default class Tetris extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
