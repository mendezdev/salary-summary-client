import React from 'react'
import { NavLink } from 'react-router-dom'

const GuestLinks = (props) => {
  return (
    <ul id="nav-mobile" className="right">
      <li><NavLink to="/signin">Signin</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
    </ul>
  )
}

export default GuestLinks