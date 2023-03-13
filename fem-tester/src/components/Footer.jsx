import React from 'react'
import IconGithub from '../assets/icon-github.svg'
import IconLinkedIn from "../assets/icon-linkedin.svg"
import IconTwitter from "../assets/icon-twitter.svg"

const Footer = () => {
  return (
    <footer>
      <h4>Designed & developed by Jolene Kearse <span>&#169; {new Date().getFullYear()}</span></h4>
      <ul>
        <li><img src={IconGithub} alt="" /></li>
        <li><img src={IconLinkedIn} alt="" /></li>
        <li><img src={IconTwitter} alt="" /></li>
      </ul>
      <p>This is a personal project and has absolutely no affliation with Frontend Mentor.</p>
    </footer>
  )
}

export default Footer