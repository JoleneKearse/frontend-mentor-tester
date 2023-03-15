import React from 'react'

const Output = ({ mobView, deskView }) => {
  return (
    <div id='outputBlock'>
      <div className="view" id='mobView'>
        <h3>Mobile View</h3>
        <div className="image-box"><img src={mobView} alt="" /></div>
      </div>
      <div className="view" id='deskView'>
        <h3>Desktop View</h3>
        <div className="image-box"><img src={deskView} alt="" /></div>
      </div>
    </div>
  )
}

export default Output