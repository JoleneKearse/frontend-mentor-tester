import React from 'react'

const Output = ({ mobView, setMobView, deskView, setDesktopView, httpGetAsync }) => {
  return (
    <div id='outputBlock'>
      <div className="view" id='mobView'>
        <h3>Mobile View</h3>
        <div className="image-box"><img src="" alt="" /></div>
      </div>
      <div className="view" id='deskView'>
        <h3>Desktop View</h3>
        <div className="image-box"><img src="" alt="" /></div>
      </div>
    </div>
  )
}

export default Output