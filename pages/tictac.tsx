import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import styled from 'styled-components'

interface EProps {
  className: 'highlight' | null | undefined
  onClick: React.MouseEventHandler
  value: string
}

interface SProps {
  onClick: React.MouseEventHandler
  histories: any
  asc: boolean
  winner: { mark?: string; numbers?: number[] } | null
  stepNumber: number
  xIsNext: boolean
}

function Square(props: EProps) {
  return (
    <button className={'square ' + props.className} onClick={props.onClick}>
      {props.value}
      <style>
        {`
        .square {
          background: #fff;
          border: 1px solid #999;
          float: left;
          font-size: 24px;
          font-weight: bold;
          line-height: 34px;
          height: 34px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 34px;
        }
        .square:focus {
          outline: none;
        }
        .kbd-navigation .square:focus {
          background: #ddd;
        }
        .highlight {
          background: yellow;
        }
      `}
      </style>
    </button>
  )
}

const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`
function Board(props: {
  squares: any
  onClick: any
  winner: { mark?: string; numbers?: number[] } | null
}) {
  const win = (i: number): any =>
    props.winner
      ? props.winner.numbers && props.winner.numbers.map((n: number) => i === n && ' highlight ')
      : null

  const renderSquare = (i: number) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} className={win(i)} />
  )

  return (
    <div className='game-board'>
      <div>
        <BoardRow>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </BoardRow>
      </div>
    </div>
  )
}

function SwichButton(props: SProps) {
  // const jumpTo = (step: number) => {
  //   setStepNumber(step)
  //   setXIsNext(step % 2 === 0)
  // }
  const status = () =>
    props.winner
      ? 'Winner: ' + props.winner.mark
      : props.stepNumber < 9
      ? 'Next player: ' + (props.xIsNext ? 'X' : 'O')
      : 'Draw'

  const moves = props.histories.map((history: any, step: string | any) => {
    !props.asc && (step = props.histories.length - step - 1)
    const bold = props.stepNumber === step ? 'bold' : 'unbold'
    const desc = step ? 'Go to move #' + step : 'Go to game start'
    return (
      <li key={step}>
        <button
          className={bold}
          // onClick={() => jumpTo(step)}
        >
          {desc}
        </button>
        <style>
          {`
          .bold {
            font-weight: bold;
          }
        `}
        </style>
      </li>
    )
  })

  return (
    <div style={{ marginLeft: '20px' }}>
      <div>{status()}</div>
      <div>
        <button onClick={props.onClick}>Sort order</button>
      </div>
      <ol style={{ paddingLeft: '30px' }}>{moves}</ol>
    </div>
  )
}

function calculateWinner(squares: string[]): { mark?: string; numbers?: number[] } | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const line = lines.find(
    (i) => squares[i[0]] && squares[i[0]] === squares[i[1]] && squares[i[0]] === squares[i[2]],
  )
  return line ? { mark: squares[line[0]], numbers: line } : null
}

function Game() {
  const [histories, setHistories] = useState([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [asc, setAsc] = useState(true)
  const history = histories.slice(0, stepNumber + 1)
  const squares = history[history.length - 1].squares.slice()
  const winner = calculateWinner(squares)

  useEffect(() => {
    document.title = `You clicked ${stepNumber} times`
  }, [stepNumber])

  const sortOrder = () => setAsc(!asc)
  const handleClick = (i: number) => {
    if (winner || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistories(history.concat([{ squares: squares }]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Board squares={squares} onClick={(i: number) => handleClick(i)} winner={winner} />
      <SwichButton
        onClick={() => sortOrder()}
        histories={histories}
        asc={asc}
        winner={winner}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
      />
    </div>
  )
}

// ========================================

export default class TicTocToe extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
