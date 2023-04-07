import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='title gradient-text text-stroke'>Frontend Mentor <span class="title-deco">Tester</span></h1>
      <p className="intro"><a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer">Frontend Mentor</a> is an <span className='gradient-text bold'>awesome</span> way to:</p>
      <ul className='intro-list'>
        <li><span className='gradient-text bold'>challenge</span> yourself</li>
        <li><span className='gradient-text bold'>test</span> your skills</li>
        <li>& just have <span className='gradient-text bold'>fun</span></li>

      </ul>
      <p className="intro">But finding <span className='gradient-text bold'>quick</span> & <span className='gradient-text bold'>simple</span> ways to test the <span className='gradient-text bold'>375px mobile</span> and <span className='gradient-text bold'>1440px desktop</span> views can be a pain.</p>
      <p className="intro">This is my solution! Enter your params below, hit '<span className='gradient-text bold'>Go!</span>', then in just a few seconds, you'll be able to compare your coded result.</p>
    </div>
  )
}

export default Header