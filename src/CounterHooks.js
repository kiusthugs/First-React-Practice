import React, { useState } from "react"

export default function CounterHooks({ initialCount }) {
  const [initialState, stateFunc] = useState(initialCount)
  return (
    <>
      <button
        onClick={() => {
          stateFunc(prevState => prevState - 1)
        }}
      >
        -
      </button>
      <span>{initialState}</span>
      <button
        onClick={() => {
          stateFunc(prevState => prevState + 1)
        }}
      >
        +
      </button>
    </>
  )
}
