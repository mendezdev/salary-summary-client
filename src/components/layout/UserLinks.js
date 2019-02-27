import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLinks = (props) => {
  return (
    <ul id="nav-mobile" className="right">
      <li><NavLink to="/createAccount">Crear Cuenta</NavLink></li>
      <li><NavLink to="/createExpense">Crear Gasto</NavLink></li>
    </ul>
  )
}

export default UserLinks