import axios from 'axios'
import { GET_ACCOUNTS } from './types'

const uri = 'http://localhost:5000';

const getAccountsAsync = async () => {
  const res = await axios.get(`${uri}/accounts`)

  return {
    type: GET_ACCOUNTS,
    payload: res.data
  }
}

export const getAccounts = () => async dispatch => {
  dispatch(await getAccountsAsync())
}