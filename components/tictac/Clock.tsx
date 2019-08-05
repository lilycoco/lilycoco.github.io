import React, { useState, useEffect } from 'react'
import { WinnerCondition } from '../../models/Tictac'

const startTime = Date.now()
const Timer = (currentDate: number, winner: WinnerCondition | null) => {
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

export const Clock = (props: { winner: WinnerCondition | null }) => {
  const timer = Timer(0, props.winner)
  return <h4> {timer} sec </h4>
}
