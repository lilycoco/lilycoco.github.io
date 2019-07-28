import React, { useState, useEffect } from 'react'
import { WProps } from '../../models/Tictac'
import { H2 } from './Style'

const startTime = Date.now()
const Timer = (currentDate: number, winner: WProps | null) => {
  const [date, setDate] = useState(currentDate)
  const tick = () => setDate(Math.round((Date.now() - startTime) / 1000))
  const timerID = setInterval(() => tick(), 1000)

  useEffect(() => {
    timerID
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  if (winner) {
    clearInterval(timerID)
  }

  return date
}

export const Clock = (props: { winner: WProps | null }) => {
  const timer = Timer(0, props.winner)
  return (
    <div>
      <H2> {timer} sec has passed </H2>
    </div>
  )
}
