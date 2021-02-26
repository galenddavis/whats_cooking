import React from 'react';
import { Link } from 'react-router-dom';


const GroceryListItem =({item, deleteGroceryItem, state}) => {
  return (
    <li>
      <p>{item.name}</p>
      <button onClick={() => deleteGroceryItem(item)}>Remove From Grocery List</button>
    </li>
  )
}

export default GroceryListItem;