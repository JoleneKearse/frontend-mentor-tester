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
                {mobDataUrl ? <img src={mobDataUrl} alt="Frontend Mentor Mobile Design" /> : null} 
                <img src={mobView} alt="Your awesome mobile work" />
              </div>
            </div>
            <div className="view" id='deskView'>
              <h3>Desktop View</h3>
              <div className="image-box">
              {deskDataUrl ? <img src={deskDataUrl} alt="Frontend Mentor Design" /> : null}
                <img src={deskView} alt="Your awesome desktop work" />
              </div>
            </div>
          </div>
        ) : null}</>
  )
}

export default Output