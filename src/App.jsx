import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilValue } from 'recoil'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA/>
      <ComponentB/>
    </>
  )
}

export default App
