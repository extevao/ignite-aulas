import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  return (
    <div>
      <div> {count} </div>
      <button type="button" onClick={increment}>
        Increment diawjdioaj
      </button>
    </div>
  )
}
