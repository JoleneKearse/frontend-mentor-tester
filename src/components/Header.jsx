import React from 'react'
import Cover from '../assets/fm-tester-cover.png'
import Arrow from '../assets/down-arrow.png'

const Header = ({ handleClickScroll }) => {
  return (
    <div className='header'>
      <h1 className='title gradient-text text-stroke'>Frontend Mentor <span class="title-deco">Tester</span></h1>

      <div className="side-by-side">
        <div>
          <img src={Cover} alt="anime girl stressed out testing mobile and desktop sites" className='cover-img' />
        </div>
        <div className="intro-text">
          <p className="intro">Tired of spending all that <span className='gradient-text bold'>exhausting</span> time testing out <span className='gradient-text bold'>375px mobile</span> and <span className='gradient-text bold'>1440px desktop</span> views of your <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontend Mentor</a> <span className='gradient-text bold'>challenges?</span>.</p>
          <p className="intro">Okay, maybe it's not <span className='gradient-text bold'>sooo</span> much time, but let's <span className='gradient-text bold'>speed it up</span> anyway!</p>
          <p className="intro">Enter your params below, hit '<span className='gradient-text bold'>Go!</span>', then compare your coded result in <span className='gradient-text bold'>seconds</span>.</p>
        </div>
      </div>

      <img src={Arrow} alt="" className='deco cursor' onClick={handleClickScroll}/>

    </div>
  )
}

export default Header