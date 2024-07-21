import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import ButtonGroup from './components/ButtonGroup'

type GameStates = 'menu' | 'game' | 'finished'

// type Menu = {

// }

function App() {
  const [curGameState, setGameState] = useState<GameStates>('menu')

  return (
    <>
    <div className='title-block'>
      <h1>Root</h1>
    </div>
    <div className='app-container'>
      { curGameState === 'menu' 
        ? <ButtonGroup gameState={curGameState}/> 
        : <Game /> } 
    </div>
    </>
  )
}

export default App
