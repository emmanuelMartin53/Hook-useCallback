import { useState, useCallback } from 'react'
import Button from './components/Button'
import Count from './components/Count'
import './App.css'

const App = () => {


  const [countOne, setCountOne] = useState({value: 0, btnColor: "primary", increment: 25})
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: "warning", increment: 20})


  const incrementCountOne = useCallback((value) => { // useCallback permet d'éviter le rechargement s'il n'y pas de modification de countOne
    console.log('je suis dans incrementCountOne')
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + value })
  }, [countOne])






  const incrementCountTwo =  useCallback((value) => {
    console.log('je suis dans incrementCountTwo')
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + value })
  }, [countTwo])




  return (
    <div className="container">

      <Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
      <Count text="CountTwo"  count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Button>
      <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Button>

    </div>
  )
}

export default App
