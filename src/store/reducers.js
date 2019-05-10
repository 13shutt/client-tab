import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import tabClientReducer from 'store/TabClient/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  tabClientReducer
})