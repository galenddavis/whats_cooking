import React from 'react';
import GroceryListItem from './grocery_list_item'

class GroceryList extends React.Component {
  constructor(props){
    super(props)
    this.mappedItems = this.mappedItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroceryList(this.props.currentUser.id)
  }

  mappedItems() {
    const items = this.props.groceries.data.data !== undefined ?  this.props.groceries.data.data.map((item) => {
      return <GroceryListItem item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
    }) : null;
    return items;
  }

  render(){
    return (
      <div className='grocery'>
        <h1>Grocery List</h1>
        <ul className='list'>
          {this.mappedItems()}
        </ul>
      </div>
    )

  }
}

export default GroceryList