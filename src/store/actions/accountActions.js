import { GET_ACCOUNTS } from './types'

export const getAccounts = () => {
  return {
    type: GET_ACCOUNTS,
    payload: { data: 'accounts' }
  }
}