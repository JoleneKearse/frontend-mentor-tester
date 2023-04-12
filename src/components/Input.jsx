import React from 'react'
import Arrow from '../assets/down-arrow.png'

const Input = ({
  url,
  setUrl,
  urlValue,
  handleSubmit,
  handleMobFileUpload,
  handleDeskFileUpload,
  handleClickScroll,
  inputSec }) => {

  return (
    <>
      <div id="inputBlock" ref={inputSec}>
        <h2 className='gradient-text bold'>Params</h2>
        <p><span className='gradient-text bold'>1)</span> Enter your <span className='gradient-text bold underline' title="Sorry this site can't handle a local site - yet!">deployed site</span>.</p>
        <p className='info'>If you haven't deployed it yet, head over to <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a> or <a href="https://www.netlify.com/?utm_medium=paid_search&utm_source=google&utm_campaign=12755510784&utm_term=netlify" target="_blank" rel="noopener noreferrer">Netlify</a>.</p>
        <form
          id="siteInput"
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
                value=''
                className='upload-btn'
                onChange={handleMobFileUpload} />
            </label>
            <label htmlFor="deskImg">
              <input
                type="file"
                name="deskImg"
                id="deskImg"
                accept='image/*'
                value=''
                className='upload-btn'
                onChange={handleDeskFileUpload} />
            </label>
          </div>
          <button
            type="submit"
          >
            Go!
          </button>
        </form>
      </div>
      <img src={Arrow} alt="" className='deco cursor' onClick={handleClickScroll} />
    </>
  )
}

export default Input