import React, { useState, useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Board } from '../components/TictacBoard'
import { SwichButton } from '../components/TictacSwichButton'
import { Clock } from '../components/TictacClock'
import { WProps } from '../models/Tictac'

function calculateWinner(squares: string[]): WProps | null {
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
  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  return (
    <div>
      <Board squares={squares} onClick={(i: number) => handleClick(i)} winner={winner} />
      <Clock winner={winner} />
      <SwichButton
        onClick={() => sortOrder()}
        histories={histories}
        asc={asc}
        winner={winner}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
        jump={(step: number) => jumpTo(step)}
      />
    </div>
  )
}

export default class TicTocToe extends React.Component<{ contents: any }> {
  public render() {
    return (
      <Layout>
        <Game />
      </Layout>
    )
  }
}
