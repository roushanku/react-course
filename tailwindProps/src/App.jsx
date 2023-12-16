import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500'>tailwind with Vite</h1>
      <Card username = "roushan"/>
      <Card username='roush' post = 'staff engg'/>
      <Card/>
    </>
  )
}

export default App
