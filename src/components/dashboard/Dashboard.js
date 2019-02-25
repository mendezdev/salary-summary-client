import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountList from './AccountList'
import Spinner from '../utils/Spinner'
import { getAccounts } from '../../store/actions/accountActions'

class Dashboard extends Component {

  componentDidMount() {    
    this.props.getAccounts()
  }

  renderAccounts() {
    const {accounts} = this.props
    if (accounts.loading) {
      return <Spinner />
    }

    if (accounts.hasError) {
      return <p>Ocurrió un error al intentar cargar las cuentas.</p>
    }

    return <AccountList accounts={accounts.accounts} />
  }

  render() {
    return (
      <div>
        <h1 className="center">
          Dashboard
        </h1>
        {this.renderAccounts()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.account
  }
}

export default connect(mapStateToProps, { getAccounts })(Dashboard)