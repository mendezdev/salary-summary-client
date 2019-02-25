import { 
  GET_ACCOUNTS, 
  GET_ACCOUNTS_ERROR, 
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNT_BY_ID
} from '../actions/types'

const initialState = {
  loading: false,
  hasError: false,
  error: null,
  accounts: []
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
        error: null
      }
    case GET_ACCOUNTS:
      return {
        ...state,
        hasError: false,
        error: null,
        loading: false,
        accounts: action.payload        
      }
    case GET_ACCOUNT_BY_ID:
      return {
        ...state,
        loading: false,
        hasError: false,
        error: null,
        account: action.payload
      }
    case GET_ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload,
        accounts: []
      }
    default:
      return state
  }
}

export default accountReducer