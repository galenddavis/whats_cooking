import React from 'react';
import { Link } from 'react-router-dom';


const GroceryListIndex =({item, removeGroceryItem}) => {
  return (
    <li>
      <p>{item}</p>
      <button onClick={() => removeGroceryItem(item.id)}>Remove From Grocery List</button>
    </li>
  )
}

export default GroceryListIndex;