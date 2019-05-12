import Contact from './Contact'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteItem, editItem, addItem } from 'store/TabClient/actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    deleteItem,
    editItem, 
    addItem
  }, dispatch)
})

export default connect(mapDispatchToProps)(Contact)