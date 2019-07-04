import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import styled from 'styled-components'

const paddingLeft = {
  paddingLeft: '30px',
}

const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`
interface EProps {
  className: 'highlight' | undefined
  onClick: React.MouseEventHandler
  value: string
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

function Board(props: { squares: any; onClick: any; highlight: any }) {
  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        className={props.highlight(i)}
      />
    )
  }

  return (
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
  let line = null
  lines.forEach((i) => {
    const [markA, markB, markC] = [squares[i[0]], squares[i[1]], squares[i[2]]]
    if (markA && markA === markB && markA === markC) {
      line = { mark: markA, numbers: i }
    }
  })
  return line
}

function Game() {
  const [historys, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ])

  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)
  const [asc, setAsc] = useState(true)

  const history = historys.slice(0, stepNumber + 1)
  const current = history[history.length - 1]
  const squares = current.squares.slice()
  const winner = calculateWinner(squares)
  const sortOrder = () => setAsc(!asc)
  const handleClick = (i: number) => {
    if (winner || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(history.concat([{ squares: squares }]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  useEffect(() => {
    document.title = `You clicked ${stepNumber} times`
  }, [stepNumber])

  const moves = historys.map((step, move) => {
    if (!asc) {
      move = historys.length - move - 1
    }
    const bold = stepNumber === move ? 'bold' : 'unbold'
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <button className={bold} onClick={() => jumpTo(move)}>
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

  const win = (i: number) =>
    winner ? winner.numbers && winner.numbers.map((n: number) => i === n && ' highlight ') : null

  const status = () =>
    winner
      ? 'Winner: ' + winner.mark
      : stepNumber < 9
      ? 'Next player: ' + (xIsNext ? 'X' : 'O')
      : 'Draw'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div className='game-board'>
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
          highlight={(i: number) => win(i)}
        />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <div>{status()}</div>
        <div>
          <button onClick={() => sortOrder()}>Sort order</button>
        </div>
        <ol style={paddingLeft}>{moves}</ol>
      </div>
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
