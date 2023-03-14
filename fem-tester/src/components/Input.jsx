import React from 'react'

const Input = () => {
  return (
    <div id="inputBlock">
      <h2>Params</h2>
      <p>Simply enter your <span className='gradient-text bold'>deployed site</span> and check out the results!</p>
      <label htmlFor="website">
        <input type="url" name="website" id="websiteUrl" placeholder='https://frontend-mentor-project.vercel.app'/>
      </label>
    </div>
  )
}

export default Input