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
  const [mobUpload, setMobUpload] = useState('')
  const [mobDataUrl, setMobDataUrl] = useState('')
  const [deskUpload, setDeskUpload] = useState('')
  const [deskDataUrl, setDeskDataUrl] = useState('')

  const image = /image\/(png|jpg|jpeg)/i

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

  // get file upload previews
  const handleMobFileUpload = (e) => {
    const mobUpload = e.target.files[0]
    if (!mobUpload.type.match(image)) {
      alert("Not an image file, please use .jpg, .jpeg, or .png.")
      return
    }
    setMobUpload(mobUpload)
    console.time()
  }

  const handleDeskFileUpload = (e) => {
    const deskUpload = e.target.files[0]
    if (!deskUpload.type.match(image)) {
      alert("Not an image file, please use .jpg, .jpeg, or .png.")
      return
    }
    setDeskUpload(deskUpload)
    console.timeLog()
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
  }, [url])

  useEffect(() => {
    let fileReader, isCancel = false
    if (mobUpload) {
      fileReader = new FileReader()
      fileReader.onload = (e) => {
        const { result } = e.target
        if (result && !isCancel) {
          setMobDataUrl(result)
        }
      }
      fileReader.readAsDataURL(mobUpload)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [mobUpload])

  useEffect(() => {
    let fileReader, isCancel = false
    if (deskUpload) {
      fileReader = new FileReader()
      fileReader.onload = (e) => {
        const { result } = e.target
        if (result && !isCancel) {
          setDeskDataUrl(result)
        }
      }
      fileReader.readAsDataURL(deskUpload)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [deskUpload])

  return (
    <div className="App">
      <Header />
      <Input
        url={url}
        setUrl={setUrl}
        urlValue={urlValue}
        mobUpload={mobUpload}
        setMobUpload={setMobUpload}
        deskUpload={deskUpload}
        setDeskUpload={setDeskUpload}
        handleSubmit={handleSubmit}
        handleMobFileUpload={handleMobFileUpload}
        handleDeskFileUpload={handleDeskFileUpload}
      />
      <Output
        mobView={mobView}
        deskView={deskView}
        mobUpload={mobUpload}
        setMobUpload={setMobUpload}
        deskUpload={deskUpload}
        setDeskUpload={setDeskUpload}
        mobDataUrl={mobDataUrl}
        deskDataUrl={deskDataUrl}
      />
      <Footer />
    </div>
  )
}

export default App
