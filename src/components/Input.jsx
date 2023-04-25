import React from 'react'
import Arrow from '../assets/down-arrow.png'

const Input = ({
  url,
  setUrl,
  urlValue,
  handleSubmit,
  handleFileUpload,
  handleClickScroll,
  inputSec
}) => {

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
          <p className="info">Hold down the ctrl or cmd key to upload both files.</p>
          <div className="file-upload flex">
            <label htmlFor="fileImgs">
              <input
                type="file"
                name="fileImgs"
                id="fileImgs"
                accept='image/*'
                value=''
                className='upload-btn'
                multiple="multiple"
                onChange={handleFileUpload} />
            </label>
          </div>
          <p><span className="gradient-text bold">3)</span> Click <span className="gradient-text bold">Go!</span> to load the images.</p>
          <button
            type="submit"
          >
            Go!
          </button>
          <p><span className="gradient-text bold">4)</span> The <span className="gradient-text bold">Frontend Mentor images</span> will appear under <span className="gradient-text bold">your beautiful work </span>. Simply move the slider back and forth to compare.</p>
        </form>
      </div>
      <img src={Arrow} alt="" className='deco cursor' onClick={handleClickScroll} />
    </>
  )
}

export default Input