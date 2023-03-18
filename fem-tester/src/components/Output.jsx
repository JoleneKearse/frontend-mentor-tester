import React, { useEffect } from 'react'

const Output = ({ mobView, deskView, mobDataUrl, deskDataUrl }) => {

  const slide = (e) => {
    const sliderValue = e.target.value
    const imageBox = e.target.parentElement
    const userDesignedImg = imageBox.querySelector('.user-designed-img')
    userDesignedImg.style.width = `${sliderValue}%`
  }

  const updateImageBoxHeight = (imageBox) => {
    const userDesignedImg = imageBox.querySelector('.user-designed-img')
    const uploadImg = imageBox.querySelector('.upload-img')

    if (userDesignedImg.naturalHeight && uploadImg.naturalHeight) {
      const maxHeight = Math.max(userDesignedImg.naturalHeight, uploadImg.naturalHeight)
      imageBox.style.height = `${maxHeight}px`
    }
  }

  useEffect(() => {
    const imageBoxes = document.querySelectorAll('.image-box')
    imageBoxes.forEach((imageBox) => {
      updateImageBoxHeight(imageBox)
    })
  }, [mobView, deskView, mobDataUrl, deskDataUrl])

  return (
    <>
      {
        mobView !== '' && mobDataUrl !== null ? (
          <div id='outputBlock'>
            <div
              className="view"
              id='mobView'>
              <h3>Mobile View</h3>
              <div
                className="image-box" >
                <img
                  src={mobView}
                  alt="Your awesome mobile work"
                  className='user-designed-img img-path' />
                {mobDataUrl ?
                  <img
                    src={mobDataUrl}
                    alt="Frontend Mentor Mobile Design"
                    className='upload-img' />
                  : null}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="100"
                  className="slider"
                  onInput={slide} />
              </div>
            </div>
            <div
              className="view"
              id='deskView'>
              <h3>Desktop View</h3>
              <div
                className="image-box" >
                <img
                  src={deskView}
                  alt="Your awesome desktop work"
                  className='user-designed-img img-path' />
                {deskDataUrl ?
                  <img
                    src={deskDataUrl}
                    alt="Frontend Mentor Design"
                    className='upload-img' />
                  : null}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="100"
                  className="slider"
                  onInput={slide} />
              </div>
            </div>
          </div>
        ) : null}</>
  )
}

export default Output