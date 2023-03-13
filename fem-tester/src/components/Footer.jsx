import React from 'react'
import './Header.css'
import IconGithub from '../assets/icon-github.svg'
import IconLinkedIn from "../assets/icon-linkedin.svg"
import IconTwitter from "../assets/icon-twitter.svg"

const Footer = () => {
  return (
    <footer>
      <h4>Designed & developed by Jolene Kearse</h4>
      <ul>
        <li><img src={IconGithub} alt="" /></li>
        <li><img src={IconLinkedIn} alt="" /></li>
        <li><img src={IconTwitter} alt="" /></li>
      </ul>
    </footer>
  )
}

export default Footer