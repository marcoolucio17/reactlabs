import { useState, useEffect } from 'react'
import './App.css'
import Primer from './Primer'
import { Second } from './Second'
import { heroes } from './data/heroes'

function App() {
  // print heroes

  heroes.map((hero) => {
    console.log(`${hero.id}: ${hero.name} by ${hero.owner}`)
  })

  return (
    <>
      <div style = {{display: "flex", gap: "1rem", alignItems: "center"}}>
        <p>Primer componente: </p>
        <Primer />
      </div>

      <div style = {{display: "flex", gap: "1rem", alignItems: "center"}}>
        <p>Segunda componente: </p>
        <Second />
      </div>

      <div style={{ display: "flex", gap: "0.3rem", alignItems: "center", flexDirection: "column" }}>
        <p>Muestra de elementos de heroes: </p>

        {heroes.map((hero) => (
          <p key={hero.id}>
            {hero.name} ({hero.owner})
          </p>
        ))}
      </div>

    </>
  )
}

export default App
