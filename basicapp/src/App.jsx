import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] =  useState(0) 

   function addValue() {
    if(counter < 20)
    setCounter(counter + 1)
  }
    function removeValue(){
      if(counter > 0){
      setCounter(counter - 1)
      }
    }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
