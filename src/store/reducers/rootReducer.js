import { combineReducers } from 'redux'

import accountReducer from './accountReducer'
import authReducer from './authReducer'
import expenseReducer from './expenseReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer,
  expense: expenseReducer
})

export default rootReducer