import React from 'react'

const Input = ({ url, setUrl, urlValue, mobUpload, setMobUpload, deskUpload, setDeskUpload, handleSubmit, handleFileUpload }) => {


  return (
    <div id="inputBlock">
      <h2>Params</h2>
      <p><span className='gradient-text bold'>1)</span> Enter your <span className='gradient-text bold'>deployed site</span>.</p>
      <form
        id="siteInput"
        // className='flex'
        onSubmit={handleSubmit}>
        <label htmlFor="urlInput" >
          <input
            type="url"
            name="urlInput"
            id="websiteUrl"
            placeholder='https://frontend-mentor-project.vercel.app'
            value={url}
            ref={urlValue}
            onChange={(e) => setUrl(e.target.value)} />
        </label>
        <p><span className='gradient-text bold'>2)</span> Upload the provided <span className='gradient-text bold'>mobile</span> & <span className='gradient-text bold'>desktop</span> images.</p>
        <div className="file-upload flex">
          <label htmlFor="mobImg">
            <input
              type="file"
              name="mobImg"
              id="mobImg"
              accept='image/*'
              value={mobUpload}
              className='upload-btn' 
              onChange={(e) => setMobUpload(e.target.value)} />
          </label>
          <label htmlFor="deskImg">
            <input
              type="file"
              name="deskImg"
              id="deskImg"
              accept='image/*'
              value={deskUpload}
              className='upload-btn'
              onChange={(e) => setDeskUpload(e.target.value)} />
          </label>
        </div>
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