import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  )
}

export default App
