import React, { useState } from "react"
import Counter from "./Counter"
import CounterHooks from "./CounterHooks.js"

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState("red")
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        Counter
        <Counter initialCount={0}></Counter>
        CounterHooks
        <CounterHooks initialCount={3}></CounterHooks>
        <button
          onClick={() =>
            setTheme(prevState => {
              if (prevState === "red") {
                return (prevState = "blue")
              } else {
                return (prevState = "red")
              }
            })
          }
        >
          Change Color
        </button>
      </ThemeContext.Provider>
    </>
  )
}

export default App
