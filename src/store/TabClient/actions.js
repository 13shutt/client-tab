import { DELETE_ITEM, EDIT_ITEM, ADD_ITEM } from './constants'

const deleteItem = (id, type, value) => dispatch => {
  const data = {id: id, type: type, data: value}
  dispatch({type: DELETE_ITEM, payload: data})
}

const editItem = (id, type, value, edit) => dispatch => {
  const data = {id: id, type: type, data: value}
  const edited = {id: id, type: type, data: edit}
  dispatch({type: EDIT_ITEM, payload: [data, edited]})
}

const addItem = (id, type, data, newData) => dispatch => {
  const element = {id: id, type: type, data: data}
  const newAdded = {id: id, type: type, data: newData}
  dispatch({type: ADD_ITEM, payload: [element, newAdded]})
}

export { deleteItem, editItem, addItem }