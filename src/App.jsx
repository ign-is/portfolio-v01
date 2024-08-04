import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import DecorativeElements from './components/DecorativeElements'


function App() {
  const [navSection, setNavSection] = useState('home')
  console.log(navSection);

  return (
    <div className='container-dots'>
      <DecorativeElements navSection={navSection} />
      <Navbar navSection={navSection} setNavSection={setNavSection}/>
      <Header />

      
    </div>
  )
}

export default App
