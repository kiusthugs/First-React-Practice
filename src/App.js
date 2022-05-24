import React from "react"
import Counter from "./Counter"
import CounterHooks from "./CounterHooks.js"

export const ThemeContext = React.createContext()

function App() {
  return (
    <>
      Counter
      <Counter initialCount={0}></Counter>
      CounterHooks
      <CounterHooks initialCount={3}></CounterHooks>
    </>
  )
}

export default App
