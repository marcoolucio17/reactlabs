import React, { useState } from 'react'

export const Counter = () => {
    const [ count, setCount ] = useState(0);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button className = "btn btn-primary" onClick={ () => setCount(count + 1) }>
            Add
        </button>
        <button className = "btn btn-primary"  onClick={ () => setCount(1) }>
            Reset
        </button>
        <button className = "btn btn-primary"  onClick={ () => setCount(count - 1) }>
            Subtract
        </button>
    </div>
  )
}
