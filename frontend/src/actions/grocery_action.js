import * as APIGroceries from '../util/groceries_util'

export const REMOVEGROCERYITEM = 'REMOVEGROCERYITEM'
export const RECIEVE_ALL_GROCERIES = 'RECIEVE_ALL_GROCERIES'
export const RECIEVE_GROCERY_ITEM = 'RECIEVE_GROCERY_ITEM'

export const removeGroceryItem = (item) => ({
  type: REMOVEGROCERYITEM,
  item
})
export const receiveGroceries = (items) => ({
  type: RECIEVE_ALL_GROCERIES,
  items
})
export const receiveGroceryItem = (item) => ({
  type: RECIEVE_GROCERY_ITEM,
  item
})



export const addGroceryItem = item => dispatch => {
  debugger
  return APIGroceries.addGroceryItem(item)
  .then(groceryItem => dispatch(addGroceryItem(groceryItem)))
  .catch(err => console.log(err))
}
export const fetchGroceryList = (userId) => dispatch => {
  debugger
  return APIGroceries.fetchGroceryList(userId)
  .then(groceryItems => dispatch(receiveGroceries(groceryItems)))
  .catch(err => console.log(err))
}

export const deleteGroceryItem = itemId => dispatch => (
  APIGroceries.deleteGroceryItem(itemId)
  .then(item => dispatch(removeGroceryItem(item.id)))
  .catch(err => console.log(err))
)