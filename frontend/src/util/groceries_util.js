import axios from 'axios';

export const addGroceryItem = item => (
  axios.post('/api/groceryList/', item)
)

export const deleteGroceryItem = item => (
  axios.delete('/api/groceryList/users/', item)
)

export const fetchGroceryList = id => (
  axios.get(`/api/groceryList/users/${id}`)
)