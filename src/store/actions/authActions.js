import axios from 'axios'
import decode from 'jwt-decode'

import { SET_CURRENT_USER } from './types.js'
const uri = 'http://localhost:5000';

export const signIn = (credentials) => async disptach => {
  const res = await axios.post(`${uri}/users/signin`, credentials)
  const { token } = res.data
  localStorage.setItem('token', token)
  const user = decode(token)
  disptach(setCurrentUser(user))
}

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}