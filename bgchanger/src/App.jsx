import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('olive')

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          //onclick need a function itself
          // onClick={() => changeColor('red')}
          //other perspective would not ot use extra funtion and use the seuColor 
          //bcz setColor will change the update the val
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor : 'red'}}
          >Red</button>

          <button
          onClick={() => changeColor('green')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor : 'green'}}
          >Green</button>

          <button
          onClick={() => changeColor('yellow')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor : 'yellow'}}
          >yellow</button>

          <button
          onClick={() => changeColor('purple')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor : 'purple'}}
          >purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
