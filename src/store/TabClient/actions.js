import { DELETE_ITEM, EDIT_ITEM, ADD_ITEM } from './constants'

const deleteItem = () => dispatch => {
  dispatch({type: DELETE_ITEM})
}

const editItem = () => dispatch => {
  dispatch({type: EDIT_ITEM})
}

const addItem = () => dispatch => {
  dispatch({type: ADD_ITEM})
}

export { deleteItem, editItem, addItem }