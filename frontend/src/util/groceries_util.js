import axios from 'axios';

export const addGroceryItem = item => {
  return axios.post('/api/grocerylist/', item)
}

export const deleteGroceryItem = item => {
  return axios.delete(`/api/grocerylist/${item._id}`, item)
}

export const fetchGroceryList = user_id => {
  return axios.get(`/api/grocerylist/user/${user_id}`)
}