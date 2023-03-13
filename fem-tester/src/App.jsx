import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
// import IconGithub from './components/IconGithub'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      {/* <IconGithub /> */}

      <Footer />
    </div>
  )
}

export default App
