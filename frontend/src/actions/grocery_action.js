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



export const addGroceryItem = item => dispatch => (
  APIGroceries.addGroceryItem(item)
  .then(gorceryItem => dispatch(addGroceryItem(gorceryItem)))
)
export const fetchGroceryList = () => dispatch => (
  APIGroceries.fetchGroceryList()
  .then(gorceryItems => dispatch(receiveGroceries(gorceryItems)))
)

export const deleteGroceryItem = itemId => dispatch => (
  APIGroceries.deleteGroceryItem(itemId)
  .then(item => dispatch(removeGroceryItem(item.id)) )
)