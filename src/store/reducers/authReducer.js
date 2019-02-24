import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: (action.payload.username != null),
        user: action.payload,
        error: null
      }
    case SET_CURRENT_USER_ERROR:
      return {
        isAuthenticated: false,
        user: {},
        error: action.payload
      }
    default:
      return state
  }
}

export default authReducer