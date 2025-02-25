import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Form } from './Form'
import { Counter } from './Counter'
import './App.css'

function App() {
  return (
    <div style = {{display: "flex", gap: "10rem", alignItems: "center"}}>
      <Counter />
      <Form />
    </div>
  )
}

export default App
