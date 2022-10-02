import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='footer'>
        <span> <Link to="/about">Phil Neibaur</Link> | <a target="_blank" href="https://github.com/pneibaur">GitHub</a> | <a target="_blank" href="https://www.linkedin.com/in/phillip-neibaur/">LinkedIn</a></span>
    </footer>
  )
}

export default Footer