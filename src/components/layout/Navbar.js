import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Logo</Link>        
        <ul id="nav-mobile" className="right">
          <li><NavLink to="/signin">Signin</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar