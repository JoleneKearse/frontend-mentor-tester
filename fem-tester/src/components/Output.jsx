import React from 'react'

const Output = ({ mobView, deskView, mobUpload, deskUpload }) => {
  return (
    <>
      {
        mobView !== '' && deskView !== '' ? (
          <div id='outputBlock'>
            <div className="view" id='mobView'>
              <h3>Mobile View</h3>
              <div className="image-box">
                <img src={mobUpload} alt="Frontend Mentor Design" />
                <img src={mobView} alt="Your awesome work" />
              </div>
            </div>
            <div className="view" id='deskView'>
              <h3>Desktop View</h3>
              <div className="image-box">
                <img src={deskUpload} alt="Frontend Mentor Design" />
                <img src={deskView} alt="Your awesome work" />
              </div>
            </div>
          </div>
        ) : null}</>
  )
}

export default Output