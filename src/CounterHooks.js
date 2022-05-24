import React, { useState, useContext } from "react"
import { ThemeContext } from "./App.js"

export default function CounterHooks({ initialCount }) {
  const [initialState, stateFunc] = useState(initialCount)
  const style = useContext(ThemeContext) //change button color to blue
  return (
    <>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          stateFunc(prevState => prevState - 1)
        }}
      >
        -
      </button>
      <span>{initialState}</span>
      <button
        style={style}
        onClick={() => {
          stateFunc(prevState => prevState + 1)
        }}
      >
        +
      </button>
    </>
  )
}
