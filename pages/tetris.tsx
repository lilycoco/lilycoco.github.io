import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { TetrisShape } from '../components/TetrisShape'
import styled from 'styled-components'

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
  const [board, setBoard] = useState(boardType)
  const [currentColor, setCurrentColor] = useState(0)
  const [currentShape, setCurrentShape] = useState(0)
  const [running, setRunning] = useState(false)
  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)
  let selectShape = Math.floor(Math.random() * 27)
  let selectColor = Math.floor(Math.random() * 5)
  // const [lapse, setLapse] = useState(0)
  const colors = [
    //テトリスの色の配列
    'navy',
    'darkmagenta',
    'orangered',
    'yellow',
    'deeppink',
    'limegreen',
  ]

  // const addTetris = TetrisShape[currentShape].map((ver: number[], verIndex: number) => {
  //   ver.map((hor, horIndex) => (hor === 1) && { verIndex, horIndex })

  let newBoard = board.slice()

  const drowBoard = (numbers: number[][]) =>
    numbers.map((line, colNo) => (
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

  const addNewTetris = () =>
    TetrisShape[currentShape].map((hei, heiIndex) =>
      hei.map((wid, widIndex) => {
        wid === 1 && (newBoard[heiIndex + lon][widIndex + lat + 4] = currentColor)
      }),
    )

  const flow = () =>
    setInterval(() => {
      setLon(lon + 1)
    })

  const handleRunClick = () => {
    if (running) {
      clearInterval(flow())
    } else {
      flow()
    }
    return setRunning(!running)
  }

  const handleClearClick = () => {
    setBoard(boardType)
    newBoard = board.slice()
    clearInterval(flow())
    setLon(0)
  }

  return (
    <div>
      <div className='boardWrapper'>
        <div className='board'>{drowBoard(board)}</div>
        <div className='newBoard'>{drowBoard(newBoard)}</div>
      </div>
      <button className='btn btn-primary' onClick={() => handleRunClick()}>
        {running ? 'Stop' : 'Start!'}
      </button>
      <button className='btn btn-primary' onClick={() => handleClearClick()}>
        Clear
      </button>
      <label style={{ fontSize: '5em', display: 'block' }}>{lon}</label>
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
