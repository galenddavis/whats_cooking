import axios from 'axios';

export const addGroceryItem = item => {
  debugger
  return axios.post('/api/groceryList/', item)
}

export const deleteGroceryItem = item => (
  axios.delete('/api/groceryList/users/', item)
)

export const fetchGroceryList = user_id => {
  debugger
  console.log(`/api/grocerylist/user/${user_id}`)
  return axios.get(`/api/grocerylist/user/${user_id}`)
}