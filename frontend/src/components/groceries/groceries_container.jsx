import { connect } from 'react-redux';
import { deleteGroceryItem, fetchGroceryList } from '../../actions/grocery_action';
import { withRouter } from 'react-router-dom'
import GroceryList from './groceries_list'

const mstp = state => {
  console.log('reducer++++++++++++++++',state.groceries)
return {
  currentUser: state.session.user,
  groceries: state.groceries 
}
}

const mdtp = dispatch => ({
  deleteGroceryItem: item => dispatch(deleteGroceryItem(item)),
  fetchGroceryList: (id) => dispatch(fetchGroceryList(id))
})

export default withRouter(connect(mstp,mdtp)(GroceryList))