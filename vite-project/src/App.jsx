import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  //here val represent -> variable , setVal reprsent method(funtion) 
  //and useStae(15) represent intila val of val = 15
  const [val , setVal] = useState(15);
  // let val = 16

  const addValue = () => {
    // what happen if we add duplicate of sevVal??
    //only one time value is getting incremented though it is for time sevVal 
    //bcz react consider it as only one 
    //we can avoid it -> how??
    // setVal(val - 1)
    // setVal(val - 1)
    // setVal(val - 1)
    // setVal(val - 1)

    setVal((prevVal => prevVal + 1))
    setVal((prevVal => prevVal + 1))
    setVal((prevVal => prevVal + 1))
    setVal((prevVal => prevVal + 1))

  }

  const removeVal = () => {
    //same as above
    setVal(val - 1)
  }
  return (
    <>
    <h1>vite react project {val}</h1>
    <h2>project no 1 {val}</h2>
    <button onClick={addValue}>add count</button> {" "}
    <button onClick={removeVal}>remove count</button>
    </>
  )
}

export default App
