import { useState, useRef, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'
import Footer from './components/Footer'

function App() {
  const [url, setUrl] = useState('')
  const [mobView, setMobView] = useState('')
  const [deskView, setDeskView] = useState('')
  const urlValue = useRef('')

  const BASE_URL = 'https://screenshot.abstractapi.com/v1/'
  const API_KEY = '1245491679c74a789930afb8ae8911f8'

  const handleSubmit = (e) => {
    e.preventDefault()
    const userUrl = urlValue.current.value
    setUrl(urlValue.current.value)

    // build endpoint for API call
    const endpoint = `${BASE_URL}?api_key=${API_KEY}&url=${userUrl}&capture_full_page=false&export_format=png`
    setMobView(`${endpoint}&width=375`)
    setDeskView(`${endpoint}&width=1440`)
  }

  useEffect(() => {
    fetch(mobView)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => setMobView(data))
    fetch(deskView)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then((data) => setDeskView(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <Input
        url={url}
        setUrl={setUrl}
        urlValue={urlValue}
        handleSubmit={handleSubmit}
      />
      <Output
        mobView={mobView}
        setMobView={setMobView}
        deskView={deskView}
        setDeskView={setDeskView}
      // httpGetAsync={httpGetAsync}
      />
      <Footer />
    </div>
  )
}

export default App
