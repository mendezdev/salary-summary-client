import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../utils/Spinner'
import { getAccountById } from '../../store/actions/accountActions'

class AccountDetail extends Component {

  componentDidMount() {
    this.props.getAccountById(this.props.match.params.id)
  }

  render() {
    const { accounts } = this.props
    const title = <h1 className="center">Detalle de cuenta:</h1>

    if (accounts.loading) {
      return (
        <div>
          {title}
          <Spinner />
        </div>
      )
    }

    if (accounts.hasError) {
      return (
        <div>
          {title}
          <p className="center">Ocurrió un error al intentar carga el detalle de la cuenta.</p>
        </div>
      )
    }
        
    return accounts.account ? (
      <div>
        {title}
        <ul className="collection with-header">
          <li className="collection-header"><h4>Nombre: {accounts.account.name}</h4></li>
          <li className="collection-item">Disponible: {accounts.account.amount}</li>
        </ul>
      </div>
    ) : null
  }
}

const mapStateToProps = (state) => {  
  return {
    accounts: state.account
  }
}

export default connect(mapStateToProps, { getAccountById })(AccountDetail)