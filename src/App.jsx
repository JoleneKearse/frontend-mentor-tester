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

  const BASE_URL = 'https://api.apiflash.com/v1/urltoimage'
  const API_KEY = 'fee3ec2acf804a6c9893d7d971a2905e'

  const inputSec = useRef()
  const outputSec = useRef()

  const handleClickScroll = () => {
    const input = document.getElementById('inputBlock')
    const output = document.getElementById('outputBlock')
    if (input) {
      input.scrollIntoView({ behavior: 'smooth' })
    }
    if (output) {
      output.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userUrl = urlValue.current.value
    setUrl(urlValue.current.value)

    const endpoint = `${BASE_URL}?access_key=${API_KEY}&url=${userUrl}&format=png`
    setMobView(`${endpoint}&width=375&height=812&scale_factor=1`)
    setDeskView(`${endpoint}&width=1440&height=960&scale_factor=1`)
  }

  // get file upload previews
  const handleFileUpload = (files) => {
    const mobRegex = /mobile/i
    const file1 = files.target.files[0].name
    const file2 = files.target.files[1].name

    if (file1.match(mobRegex)) {
      handleMobFile(files.target.files[0])
      handleDeskFile(files.target.files[1])
    } else {
      handleDeskFile(files.target.files[0])
      handleMobFile(files.target.files[1])
    }
  }

  const handleMobFile = (file) => {
    const mobUpload = file
    setMobUpload(mobUpload)
    console.log(mobUpload)
  }

  const handleDeskFile = (file) => {
    const deskUpload = file
    setDeskUpload(deskUpload)
    console.log(deskUpload)
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
      <Header
        handleClickScroll={handleClickScroll}
      />
      <Input
        url={url}
        setUrl={setUrl}
        urlValue={urlValue}
        mobUpload={mobUpload}
        setMobUpload={setMobUpload}
        deskUpload={deskUpload}
        setDeskUpload={setDeskUpload}
        handleSubmit={handleSubmit}
        handleFileUpload={handleFileUpload}
        handleClickScroll={handleClickScroll}
        inputSec={inputSec}
      />
      <Output
        mobView={mobView}
        deskView={deskView}
        mobDataUrl={mobDataUrl}
        deskDataUrl={deskDataUrl}
        outputSec={outputSec}
      />
      <Footer />
    </div>
  )
}

export default App
