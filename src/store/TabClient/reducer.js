import { DELETE_ITEM, EDIT_ITEM, ADD_ITEM } from './constants'

const initialState = {
  contacts: [
    {id: 0, data: "vitalya@gmail.com", type: "Емейл"},
    {id: 1, data: "vitalya.getsome.com", type: "Ссылка"},
    {id: 2, data: "streeet 13", type: "Адрес"},
    {id: 3, data: "0934324352", type: "Телефон"}
  ],
  about: `Lorem Ipsum - это текст-'рыба', часто используемый 
        в печати и веб-дизайне. Lorem Ipsum является стандартной 'рыбой' 
        для текстов на латинице с начала XVI века. В то время некий безымянный 
        печатник создал большую коллекцию размеров и форм шрифтов, используя 
        Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно 
        пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.`
}

function tabClientReducer(state = initialState, action) {
  switch(action.type) {
    
    case DELETE_ITEM:
      console.log("delete item", action.payload)
      let delEL
      state.contacts.forEach((item, index) => 
      (item.type === action.payload.type && item.id === action.payload.id && item.data === action.payload.data) 
      ? delEL = index : null)
      return {
        contacts: [
          ...state.contacts.slice(0, delEL),
          ...state.contacts.slice(delEL + 1, state.contacts.length)
        ],
        about: state.about 
      }

    case EDIT_ITEM:
    console.log("edit item")
    return state

    case ADD_ITEM:
      let ind
      state.contacts.forEach((item, index) => item.type === action.payload.type ? ind = index : null)
      return {
        contacts: [
          ...state.contacts.slice(0, ind + 1),
          action.payload,
          ...state.contacts.slice(ind + 1, state.contacts.length)
        ],
        about: state.about 
      }

    default:
    return state

  }
}

export default tabClientReducer