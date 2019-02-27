import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from '../utils/Spinner'
import ExpenseList from '../expense/ExpenseList'
import { getAccountById } from '../../store/actions/accountActions'

class AccountDetail extends Component {

  componentDidMount() {
    this.props.getAccountById(this.props.match.params.id)
  }

  render() {
    const { accounts } = this.props
    const title = (
      <div>
        <h1 className="center">Detalle de cuenta</h1>
      </div>
    )

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
        <div className="row">
          <div className="col m4 s12">
            <div className="section">
              <h5>Nombre cuenta:</h5>
              <p>{accounts.account.name}</p>
            </div>
            <div className="divider"></div>
            <div className="section">
              <h5>Disponible:</h5>
              <p>$ {accounts.account.amount}</p>
            </div>
          </div>
          <div className="col m8 s12">
            <ExpenseList accountId={this.props.match.params.id} />
          </div>
        </div>
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