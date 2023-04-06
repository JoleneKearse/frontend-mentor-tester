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

  // const BASE_URL = 'https://screenshot.abstractapi.com/v1/'
  const BASE_URL = 'https://api.apiflash.com/v1/urltoimage'
  const API_KEY = 'fee3ec2acf804a6c9893d7d971a2905e'

  const handleSubmit = (e) => {
    e.preventDefault()
    const userUrl = urlValue.current.value
    setUrl(urlValue.current.value)

    const endpoint = `${BASE_URL}?access_key=${API_KEY}&url=${userUrl}&format=png`
    setMobView(`${endpoint}&width=375&height=812&scale_factor=1`)
    setDeskView(`${endpoint}&width=1440&height=960&scale_factor=1`)
  }

  // get file upload previews
  const handleMobFileUpload = (e) => {
    const mobUpload = e.target.files[0]
    if (!mobUpload.type.match(image)) {
      alert("Not an image file, please use .jpg, .jpeg, or .png.")
      return
    }
    setMobUpload(mobUpload)
  }

  const handleDeskFileUpload = (e) => {
    const deskUpload = e.target.files[0]
    if (!deskUpload.type.match(image)) {
      alert("Not an image file, please use .jpg, .jpeg, or .png.")
      return
    }
    setDeskUpload(deskUpload)
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
        mobDataUrl={mobDataUrl}
        deskDataUrl={deskDataUrl}
      />
      <Footer />
    </div>
  )
}

export default App
