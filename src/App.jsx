import { useState } from 'react'
import Button from './components/Button'
import Count from './components/Count'
import './App.css'

const App = () => {


  const [countOne, setCountOne] = useState({value: 0, btnColor: "primary", increment: 25})
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: "warning", increment: 20})


  const incrementCountOne = (value) => {
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + value })
  }

    const incrementCountTwo = (value) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + value })
  }

  return (
    <div className="container">

      <Count count={countOne.value} bgColor={countOne.btnColor}/>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>

    </div>
  )
}

export default App
