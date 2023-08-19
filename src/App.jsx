import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
