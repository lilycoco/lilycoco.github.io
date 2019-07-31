import React, { useState, useEffect } from 'react'
import { Board } from './Board'
import { SwitchButton } from './SwitchButton'
import { Clock } from './Clock'
import { calculateWinner } from '../../lib/tictac'
import { MainContents } from '../Style'

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

  const toggleOrder = () => setAsc(!asc)
  const putXorO = (i: number) => {
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
    <MainContents>
      <Board squares={squares} onClick={(i: number) => putXorO(i)} winner={winner} />
      <Clock winner={winner} />
      <SwitchButton
        onClick={() => toggleOrder()}
        histories={histories}
        asc={asc}
        winner={winner}
        stepNumber={stepNumber}
        xIsNext={xIsNext}
        jump={(step: number) => jumpTo(step)}
      />
    </MainContents>
  )
}
