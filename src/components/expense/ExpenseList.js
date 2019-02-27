import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getExpenses } from '../../store/actions/expenseActions'
import Spinner from '../utils/Spinner'

class ExpenseList extends Component {
  componentDidMount() {
    this.props.getExpenses(this.props.accountId)
  }

  render() {
    if (this.props.expense.loading) {
      return <Spinner />
    }

    return this.props.expense.expenses.length > 0 ? (
      this.props.expense.expenses.map(exp => {
        return (<div className="card blue-grey darken-1 z-depth-3" key={exp._id}>
          <div className="card-content white-text">
            <span className="card-title amber-text text-darken-1">Descripción: {exp.description}</span>
            <p>Monto: $ {exp.amount}</p>
            <p>Usuario: {exp.user.username}</p>
            <p>Email: {exp.user.email}</p>
          </div>
        </div>)
      })
    ) : (
      <p>No existen gastos para esta cuenta aún.</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expense: state.expense
  }
}

export default connect(mapStateToProps, { getExpenses })(ExpenseList)