import { GET_ACCOUNTS } from '../actions/types'

const accountReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      console.log('[accountReducer]')
      return state
    default:
      return state
  }
}

export default accountReducer