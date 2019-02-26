import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getExpenses } from '../../store/actions/expenseActions'
import Spinner from '../utils/Spinner'

class ExpenseList extends Component {
  componentDidMount() {
    console.log('[componentDidMount - props]', this.props)
    this.props.getExpenses(this.props.accountId)
  }

  render() {
    console.log('[render - props]', this.props)
    if (this.props.expense.loading) {
      return <Spinner />
    }

    return this.props.expense.expenses.length > 0 ? (
      this.props.expense.expenses.map(exp => {
        return (<div className="card blue-grey darken-1 z-depth-3" key={exp._id}>
          <div className="card-content white-text">
            <span className="card-title">Descripción: {exp.description}</span>
            <p>Monto: ${exp.amount}</p>
          </div>
          <div className="card-action">
            <Link to={'/'}>Ver detalle</Link>
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