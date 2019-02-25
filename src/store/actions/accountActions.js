import axios from 'axios'
import { 
  GET_ACCOUNTS, 
  GET_ACCOUNTS_ERROR, 
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNT_BY_ID
} from './types'

const uri = 'http://localhost:5000';

const getAccountsAsync = () => {
  return axios.get(`${uri}/accounts`)
}

const getAccountsRequest = () => {
  return {
    type: GET_ACCOUNTS_REQUEST
  }
}

const getAccountsSuccess = (accounts) => {
  return {
    type: GET_ACCOUNTS,
    payload: accounts
  }
}

const getAccountsError = (error) => {
  return {
    type: GET_ACCOUNTS_ERROR,
    payload: error
  }
}

export const getAccounts = () => async dispatch => {
  try {
    dispatch(getAccountsRequest())
    const res = await getAccountsAsync()
    dispatch(getAccountsSuccess(res.data))
  } catch (e) {
    dispatch(getAccountsError(e))
  }
}

export const getAccountById = (id) => async dispatch => {
  try {
    dispatch(getAccountsRequest())
    const res = await axios.get(`${uri}/accounts/${id}`)
    dispatch({
      type: GET_ACCOUNT_BY_ID,
      payload: res.data
    })
  } catch (e) {
    dispatch(getAccountsError(e))
  }
}