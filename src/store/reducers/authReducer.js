import { SET_CURRENT_USER } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log('[authReducer - action]', action)
      return {
        isAuthenticated: (action.payload.username != null),
        user: action.payload
      }
    default:
      return state
  }
}

export default authReducer