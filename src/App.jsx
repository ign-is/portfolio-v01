import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-dots'>
      <Navbar />
      <Header />
      <div className="bar bar-right"></div>
      <div className="bar bar-bottom"></div>
      <div className="bar bar-top-right"></div>
      <div className="bar bar-top-left"></div>
      <div className="box box-top-left"></div>
      <div className="box box-top-right"></div>
      <div className="box box-bottom-left"></div>
      <div className="box box-bottom-right"></div>
      
    </div>
  )
}

export default App
