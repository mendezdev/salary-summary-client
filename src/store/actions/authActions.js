import axios from 'axios'
import decode from 'jwt-decode'

import { setAuthorizationToken } from '../../utils/setAuthorizationToken'
import { 
  SET_CURRENT_USER,
  SET_CURRENT_USER_ERROR,
  SET_LOGOUT_CURRENT_USER
} from './types.js'

const uri = 'http://localhost:5000';

export const signIn = (credentials, history) => async disptach => {
  try {
    const res = await axios.post(`${uri}/users/signin`, credentials)
    const { token } = res.data
    setAuthorizationToken(token)
    localStorage.setItem('token', token)
    const user = decode(token)
    history.push('/')
    disptach(setCurrentUser(user))
  } catch (e) {
    disptach(setCurrentUserError(e.response.data))
  }  
}

export const setLogoutCurrentUser = () => {
  localStorage.removeItem('token')
  return {
    type: SET_LOGOUT_CURRENT_USER
  }
}

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export const setCurrentUserError = (error) => {
  return {
    type: SET_CURRENT_USER_ERROR,
    payload: error
  }
}