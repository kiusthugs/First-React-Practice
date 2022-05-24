let state = 0

function setState(argument) {
  state = argument
  return state
}

setState(decrement(state))

function decrement(arg) {
  return arg - 1
}

console.log(state)
