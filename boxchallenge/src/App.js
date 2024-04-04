
import './App.css';
import boxes from './boxes';
import React from 'react';
import Box from './box';
export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)
  // let mode = props.darkMode ? "#222222": "#cccccc"
  // const style ={
  //   backgroundColor:mode
  // }
  function toggle(id){
    setSquares(preSquares=>{
      return preSquares.map((square)=>{
        return square.id === id ? {...square, on:!square.on}:square
      })
    })
  }
  // function toggle(id){
  //   setSquares(preSquares=>{
  //     const newSquare =[]
  //     for(let i = 0; i<preSquares.length;i++){
  //       const currentSquares = preSquares[i]
  //       if(currentSquares.id === id){
  //         const updateSquares ={
  //           ...currentSquares,
  //           on: !currentSquares.on
  //         }
  //         newSquare.push(updateSquares)
  //       }
  //       else{
  //         newSquare.push(currentSquares)
  //       }
  //     }
  //     return newSquare
  //   })
  // }
  const squaresElements = squares.map(squares=>(
    // <Box toggle={toggle} key={squares.id} id={squares.id} on={squares.on}/>
    <Box toggle={()=>toggle(squares.id)} key={squares.id} id={squares.id} on={squares.on}/>
 
    ))
  return (
    <main>
      <h1>{squaresElements}</h1>
    </main>
  );
}
