import axios from 'axios'
import {
  GET_EXPENSE_REQUEST,
  GET_EXPENSE_SUCCESS,
  GET_EXPENSE_ERROR
} from './types'

const uri = 'http://localhost:5000';

const getExpensesRequest = () => {
  return {
    type: GET_EXPENSE_REQUEST
  }
}

const getExpensesSuccess = (expenses) => {
  return {
    type: GET_EXPENSE_SUCCESS,
    payload: expenses
  }
}

const getExpensesError = (error) => {
  return {
    type: GET_EXPENSE_ERROR,
    payload: error
  }
}

export const getExpenses = (accountId) => async dispatch => {
  try {
    dispatch(getExpensesRequest())
    const res = await axios.get(`${uri}/accounts/${accountId}/expenses`);
    dispatch(getExpensesSuccess(res.data))
  } catch (e) {
    dispatch(getExpensesError(e))
  }
}