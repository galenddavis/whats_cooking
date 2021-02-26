import { connect } from 'react-redux';
import { removeGroceryItem, fetchGroceryList } from '../../actions/grocery_action';
import { withRouter } from 'react-router-dom'
import GroceryList from './groceries_list'

const mstp = state => ({
  currentUser: state.session.user,
  groceries: state.groceries 
})

const mdtp = dispatch => ({
  removeGroceryItem: item => dispatch(removeGroceryItem(item)),
  fetchGroceryList: (id) => dispatch(fetchGroceryList(id))
})

export default withRouter(connect(mstp,mdtp)(GroceryList))