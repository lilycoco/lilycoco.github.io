import React, { useState, useEffect } from 'react'
import { Board } from '../components/TictacBoard'
import { SwichButton } from '../components/TictacSwichButton'
import { Clock } from '../components/TictacClock'
import { calculateWinner } from '../lib/tictac'

export const Game = () => {
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
