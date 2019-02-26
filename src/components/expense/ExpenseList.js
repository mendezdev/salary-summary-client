import React, { Component } from 'react'

import ExpenseItem from './ExpenseItem'

class ExpenseList extends Component {
  render() {
    return (
      <div>
        <p>Expense List</p>
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    )
  }
}

export default ExpenseList