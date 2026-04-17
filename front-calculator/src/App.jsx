import { useState } from 'react'
import './App.css'

function App() {
  const [firstnumber, setFirstnumber] = useState(0);
  const [secondnumber, setSecondnumber] = useState(0);
  function sum() {
    const sum = firstnumber + secondnumber;
    window.alert('The sum is: ' + sum);
  }

  return (
    <>
      <form >
        <h1>Calculator</h1>
        <label htmlFor="number1">Number 1</label>
        <br />
        <input type="number" placeholder='1' onChange={(e) => setFirstnumber(Number(e.target.value))} />
        <br />
        <label htmlFor="number2">Number 2</label>
        <br />
        <input type="number" placeholder='10' onChange={(e) => setSecondnumber(Number(e.target.value))} />
        <br />
        <button type='submit' onClick={sum}>Sum</button>
      </form>
    </>
  )
}

export default App
