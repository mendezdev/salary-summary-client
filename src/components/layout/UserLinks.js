import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { setLogoutCurrentUser } from '../../store/actions/authActions'

const UserLinks = (props) => {
  console.log('[UserLinks - props]:', props)
  return (
    <ul id="nav-mobile" className="right">
      <li><NavLink to="/createAccount">Crear Cuenta</NavLink></li>
      <li><NavLink to="/createExpense">Crear Gasto</NavLink></li>
      <li><NavLink to="/signin" onClick={props.setLogoutCurrentUser}>Logout</NavLink></li>
    </ul>
  )
}

export default connect(null, { setLogoutCurrentUser })(UserLinks)