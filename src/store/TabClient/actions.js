import { DELETE_ITEM, EDIT_ITEM, ADD_ITEM } from './constants'

const deleteItem = (id, type, value) => dispatch => {
  const data = {id: id, type: type, data: value}
  dispatch({type: DELETE_ITEM, payload: data})
}

const editItem = () => dispatch => {
  dispatch({type: EDIT_ITEM})
}

const addItem = (id, type, value) => dispatch => {
  const data = {id: id, type: type, data: value}
  dispatch({type: ADD_ITEM, payload: data})
}

export { deleteItem, editItem, addItem }