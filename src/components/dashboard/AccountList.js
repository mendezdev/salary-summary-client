import React from 'react'

const AccountList = (props) => {
  if (props.accounts.length > 0) {
    return props.accounts.map(account => {
      return (
        <ul key={account._id}>          
          <li>ID: {account._id}</li>
          <li>Name: {account.name}</li>
          <li>Amount: {account.amount}</li>
        </ul>
      )
    })
  } else {
    return <p className="center">No accounts yet</p>
  }
}

export default AccountList