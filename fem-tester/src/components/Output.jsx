import React from 'react'

const Output = ({ mobView, deskView, mobDataUrl, deskDataUrl }) => {
  return (
    <>
      {
        mobView !== '' && mobDataUrl !== null ? (
          <div id='outputBlock'>
            <div className="view" id='mobView'>
              <h3>Mobile View</h3>
              <div className="image-box">
                <img src={mobView} alt="Your awesome mobile work" className='user-designed-img' />
                {mobDataUrl ? <img src={mobDataUrl} alt="Frontend Mentor Mobile Design" className='upload-img' /> : null}
              </div>
            </div>
            <div className="view" id='deskView'>
              <h3>Desktop View</h3>
              <div className="image-box">
                <img src={deskView} alt="Your awesome desktop work" className='user-designed-img' />
                {deskDataUrl ? <img src={deskDataUrl} alt="Frontend Mentor Design" className='upload-img' /> : null}
              </div>
            </div>
          </div>
        ) : null}</>
  )
}

export default Output