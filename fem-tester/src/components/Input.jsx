import React from 'react'

const Input = ({ url, setUrl, urlValue, handleSubmit }) => {


  return (
    <div id="inputBlock">
      <h2>Params</h2>
      <p>Simply enter your <span className='gradient-text bold'>deployed site</span> and check out the results!</p>
      <form
        id="siteInput"
        className='flex'
        onSubmit={handleSubmit}>
        <label htmlFor="urlInput">
          <input
            type="url"
            name="urlInput"
            id="websiteUrl"
            placeholder='https://frontend-mentor-project.vercel.app'
            value={url}
            ref={urlValue}
            onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button
          type="submit"
        >
          Go!
        </button>
      </form>
    </div>
  )
}

export default Input