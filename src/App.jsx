import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>
      <Home/>
      </div>
      <p className="read-the-docs">
Learning Website
      </p>
    </>
  )
}

export default App