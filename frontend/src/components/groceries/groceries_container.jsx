import { connect } from 'react-redux';
import { removeGroceryItem } from '../../actions/grocery_action';
import { withRouter } from 'react-router-dom'

const mstp = store => ({
  groceries: Object.values(store.groceries) 
})

const mdtp = dispatch => ({
  removeGroceryItem: item => dispatch(removeGroceryItem(item))
})

export default withRouter(connect(mstp,mdtp)(Groceries))