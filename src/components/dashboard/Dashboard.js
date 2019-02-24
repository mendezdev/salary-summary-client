import React, { Component } from 'react'
import { connect } from 'react-redux'

import AccountList from './AccountList'
import { getAccounts } from '../../store/actions/accountActions'

class Dashboard extends Component {

  componentDidMount() {    
    // this.props.getAccounts()
  }

  render() {
    console.log('[Dashboard - props]:', this.props)
    return (
      <div>
        <h1 className="center">
          Dashboard
        </h1>
        <AccountList accounts={this.props.accounts} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('[Dashboard - mapStateToProps - state]:', state)
  return {
    accounts: state.account
  }
}

export default connect(mapStateToProps, { getAccounts })(Dashboard)