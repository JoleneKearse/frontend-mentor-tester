import React from 'react'

const Input = () => {
  return (
    <div id="inputBlock">
      <h2>Params</h2>
      <p>Simply enter your <span className='gradient-text bold'>deployed site</span> and check out the results!</p>
      <form action="" id="siteInput" className='flex'>
        <label htmlFor="website">
          <input type="url" name="website" id="websiteUrl" placeholder='https://frontend-mentor-project.vercel.app'/>
        </label>
        <button type="submit">Go!</button>
      </form>
    </div>
  )
}

export default Input