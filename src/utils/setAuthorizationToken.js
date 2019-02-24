import axios from 'axios'
import decode from 'jwt-decode'

import { setCurrentUser } from '../store/actions/authActions'

export function checkAuthToken (dispatch) {
  try {
    const token = localStorage.getItem('token')
    setAuthorizationToken(token)
    dispatch(setCurrentUser(decode(token)))
  } catch (e) {
    dispatch(setCurrentUser({}))
  }  
}

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}