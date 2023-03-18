import React from 'react'
import IconGithub from '../assets/icon-github.svg'
import IconLinkedIn from "../assets/icon-linkedin.svg"
import IconTwitter from "../assets/icon-twitter.svg"

const Footer = () => {
  return (
    <footer>
      <h4>Designed & developed by Jolene Kearse <span>&#169; {new Date().getFullYear()}</span></h4>
      <ul>
        <li><a href="https://www.linkedin.com/in/jolene-kearse-2562ba218/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'><img src={IconGithub} alt="" /></a></li>
        <li><a href="https://twitter.com/FromJolene" target="_blank" rel="noopener noreferrer" aria-label='Twitter'><img src={IconLinkedIn} alt="" /></a></li>
        <li><a href="http://github.com/JoleneKearse" target="_blank" rel="noopener noreferrer" aria-label='Github'><img src={IconTwitter} alt="" /></a></li>
      </ul>
      <p>This is a personal project and has absolutely no affliation with Frontend Mentor.</p>
    </footer>
  )
}

export default Footer