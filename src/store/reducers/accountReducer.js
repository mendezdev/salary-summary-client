import { GET_ACCOUNTS } from '../actions/types'

const accountReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.payload
    default:
      return state
  }
}

export default accountReducer