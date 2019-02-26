import {
  GET_EXPENSE_REQUEST,
  GET_EXPENSE_SUCCESS,
  GET_EXPENSE_ERROR
} from '../actions/types'

const initialState = {
  loading: false,
  hasError: false,
  error: null,
  expenses: []
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSE_REQUEST:
      return {
        loading: true,
        hasError: false,
        error: null
      }
    case GET_EXPENSE_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        error: null,
        expenses: action.payload
      }
    case GET_EXPENSE_ERROR:
      return {
        loading: false,
        hasError: true,
        error: action.payload,
        expenses: []
      }
    default:
      return state
  }
}

export default expenseReducer