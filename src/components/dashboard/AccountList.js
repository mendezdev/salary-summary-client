import React from 'react'

import AccountItem from './AccountItem'

const AccountList = (props) => {
  if (props.accounts.length > 0) {
    return (
      <div className="row">
        {props.accounts.map(account => {
          return (
            <div className="col s12 m6" key={account._id}>
              <AccountItem account={account}/>
            </div>
          )
        })}
      </div>
    )    
  } else {
    return <p className="center">No hay cuentas aún.</p>
  }
}

export default AccountList