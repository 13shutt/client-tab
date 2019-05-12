import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TabClient from './TabClient'
import { deleteItem, editItem, addItem } from 'store/TabClient/actions'

const mapStateToProps = state => ({
  contacts: state.tabClientReducer.contacts,
  about: state.tabClientReducer.about
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deleteItem,
    editItem, 
    addItem
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TabClient)