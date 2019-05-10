import { DELETE_ITEM, EDIT_ITEM } from './constants'

const deleteItem = () => dispatch => {
  dispatch({type: DELETE_ITEM})
}

const editItem = () => dispatch => {
  dispatch({type: EDIT_ITEM})
}

export { deleteItem, editItem }