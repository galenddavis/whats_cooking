import React from 'react';



const GroceryListItem =({item, deleteGroceryItem}) => {
  return (
    <li className='list-item'>
      <p>{item.name}</p>
      {/* <button onClick={() => deleteGroceryItem(item)}>Remove From Grocery List</button> */}
      <i class="fas fa-times" onClick={() => deleteGroceryItem(item)}></i>

    </li>
  )
}

export default GroceryListItem;