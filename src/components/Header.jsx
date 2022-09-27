import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
            <div>HOME</div>
        </Link>
    </nav>
  )
}

export default Header