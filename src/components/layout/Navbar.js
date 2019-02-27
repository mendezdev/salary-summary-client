import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import UserLinks from './UserLinks'
import GuestLinks from './GuestLinks'

const Navbar = (props) => {
  console.log('[Navbar - props]', props)
  const links = props.auth.isAuthenticated ? <UserLinks /> : <GuestLinks />

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Logo</Link>        
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log('[mapStateToProps - state]', state)
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar)