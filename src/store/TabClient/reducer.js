import { DELETE_ITEM, EDIT_ITEM, ADD_ITEM } from './constants'

const initialState = {
  contacts: [],
  about: ""
}

function tabClientReducer(state = initialState, action) {
  switch(action.type) {
    
    case DELETE_ITEM:
    console.log("delete item")
    return state

    case EDIT_ITEM:
    console.log("edit item")
    return state

    case ADD_ITEM:
    console.log("add item")
    return state

    default:
    return state

  }
}

export default tabClientReducer