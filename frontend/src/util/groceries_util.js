import axios from 'axios';

export const addGroceryItem = item => {
  debugger
  return axios.post('/api/grocerylist/', item)
}

export const deleteGroceryItem = item => {
  console.log(item.id)
  debugger
  return axios.delete(`/api/grocerylist/${item._id}`, item)
}

export const fetchGroceryList = user_id => {
  debugger
  console.log(`/api/grocerylist/user/${user_id}`)
  return axios.get(`/api/grocerylist/user/${user_id}`)
}