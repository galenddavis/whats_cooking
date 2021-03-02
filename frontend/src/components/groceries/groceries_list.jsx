import React from 'react';
import GroceryListItem from './grocery_list_item'

class GroceryList extends React.Component {
  constructor(props){
    super(props)
    this.mappedItems = this.mappedItems.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchGroceryList(this.props.currentUser.id)
  }

  mappedItems() {
    console.log('groceriesooooooooooooooo',this.props.groceries)
    console.log('groceriesooooooooooooooo dataaaaaaaaa',this.props.groceries.data)
    const items = this.props.groceries.data.data !== undefined ?  this.props.groceries.data.data.map((item) => {
      return <GroceryListItem item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
    }) : null;
    return items;
  }

  render(){
    debugger
    //   const items = this.props.groceries.data !== undefined ?  this.props.groceries.data.map((item) => {
    //   return <GroceryListItem item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
    // }) : null;
    console.log('more groceriesssssssssssssssssss-',this.props.groceries)
    return (
      <div className='grocery'>
        <h1>Grocery List</h1>
        <ul className='list'>
          {this.mappedItems()}
          {/* {items} */}
        </ul>
      </div>
    )

  }
}

export default GroceryList