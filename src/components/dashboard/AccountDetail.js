import React from 'react'

const AccountDetail = (props) => {
  console.log('[AccountDetail - props]:', props)
  return (
    <div>
      <h1>Account Detail!</h1>
      <p>ID: {props.match.params.id}</p>
    </div>
  )
}

export default AccountDetail