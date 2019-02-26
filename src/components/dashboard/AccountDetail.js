import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    console.log('[accounts]:', accounts)
    const title = (
      <div>
        <h1 className="center">Detalle de cuenta:</h1>
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
        {/* <ul className="collection with-header">
          <li className="collection-header"><h4>Nombre: {accounts.account.name}</h4></li>
          <li className="collection-item">Disponible: {accounts.account.amount}</li>
        </ul> */}
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
            {/* <div className="card blue-grey darken-1 z-depth-3">
              <div className="card-content white-text">
                <span className="card-title">Title</span>
                <p>Description</p>
              </div>
              <div className="card-action">
                <Link to={'/'}>Ver detalle</Link>
              </div>
            </div> */}
            <ExpenseList />
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