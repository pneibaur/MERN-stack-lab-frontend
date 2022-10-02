import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="nav">
      <Link className='link' to="/">
        <div>HOME</div>
      </Link>
      <Link className='link' to="/people">
        <div>DASHBOARD</div>
      </Link>
      <Link className='link' to="/about">
        <div>ABOUT</div>
      </Link>
    </nav>
  )
}

export default Header