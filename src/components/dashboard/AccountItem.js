import React from 'react'
import { Link } from 'react-router-dom'

const AccountItem = (props) => {
  return (
    <div className="card blue-grey darken-1 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title">{props.account.name}</span>
        <p>Disponible: ${props.account.amount}</p>
      </div>
      <div className="card-action">
        <Link to={'/accounts/' + props.account._id}>Ver detalle</Link>
      </div>
    </div>
  )
}

export default AccountItem