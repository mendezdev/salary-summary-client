import axios from 'axios'
import { 
  GET_ACCOUNTS, 
  GET_ACCOUNTS_ERROR, 
  GET_ACCOUNTS_REQUEST 
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
    console.log('[getAccounts - e]:', e)
    dispatch(getAccountsError(e))
  }
}