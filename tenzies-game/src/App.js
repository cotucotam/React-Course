import logo from './logo.svg';
import { nanoid } from 'nanoid'
import React from "react";
import './App.css';
import Die from './Die';
function App() {
  const [dice, setDice]= React.useState(allNewDice())
  function allNewDice(){
    const newDice = []
    for (let i = 0; i<10;i++)
    {
      newDice.push({
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }
  function rollDice(){
    setDice
    setDice(allNewDice())
    
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die =>{
      return die.id === id?
      {...die, isHeld: !die.isHeld}:die
    }))
  }
  const diceElements = dice.map(
    die => <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={()=>holdDice(die.id)}
      />)
  console.log(allNewDice())
  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className="dice-container">
      {diceElements}
      </div>
      <button  className='roll-dice' onClick={rollDice}>Roll</button>
    </main>

)
}

export default App;
