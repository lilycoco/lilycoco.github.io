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

function Square(props: { className: string; onClick: React.MouseEventHandler; value: string }) {
  const { className, onClick, value } = props
  return (
    <button className={'square ' + className} onClick={onClick}>
      {value}
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
      `}
      </style>
    </button>
  )
}

function Board(props: { squares: any; onClick: any; highlight: any }) {
  const renderSquare = (i: number) => {
    const { squares, onClick, highlight } = props
    return <Square value={squares[i]} onClick={() => onClick(i)} className={highlight(i)} />
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
      <style>
        {`
        .highlight {
          background-color: yellow;
        }
      `}
      </style>
    </div>
  )
}

function calculateWinner(squares: string[]): any[] | void {
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
  lines.forEach((i) => {
    let line = null
    let [a, b, c] = i
    let [markA, markB, markC] = [squares[a], squares[b], squares[c]]
    if (markA && markA === markB && markA === markC) {
      console.log('match', [markA, i])
      line = [markA, i]
      return line
    }
  })
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

  const handleClick = (i: number) => {
    const history = historys.slice(0, stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    console.log(calculateWinner(squares))
    if (calculateWinner(squares) || squares[i]) {
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

  const sortOrder = () => {
    setAsc(!asc)
  }

  const sort = () => {
    return <button onClick={() => sortOrder()}>Sort order</button>
  }

  useEffect(() => {
    document.title = `You clicked ${stepNumber} times`
  }, [stepNumber])

  const current = historys[stepNumber]
  const winner = calculateWinner(current.squares)
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

  function win(i: number) {
    if (winner) {
      const [a, b, c] = winner[1]
      if (i === a || i === b || i === c) {
        return 'highlight'
      }
    }
  }

  let status
  if (winner) {
    status = 'Winner: ' + winner[0]
  } else {
    status = stepNumber < 9 ? 'Next player: ' + (xIsNext ? 'X' : 'O') : 'Draw'
  }

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
        <div>{status}</div>
        <div>{sort()}</div>
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
