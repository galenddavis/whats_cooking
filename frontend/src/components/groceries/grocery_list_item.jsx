import React from 'react';
import { Link } from 'react-router-dom';


const GroceryListItem =({item, removeGroceryItem}) => {
  debugger
  return (
    <li>
      <p>{item.name}</p>
      <button onClick={() => removeGroceryItem(item.id)}>Remove From Grocery List</button>
    </li>
  )
}

export default GroceryListItem;