import React from 'react';
import GroceryListItem from './grocery_list_item'

class GroceryList extends React.Component {
  constructor(props){
    super(props)
    // this.mappedItems = this.mappedItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroceryList(this.props.currentUser.id)
  }

  // mappedItems() {
  //   console.log('groceriesooooooooooooooo',this.props.groceries)
  //   const items = this.props.groceries.data !== undefined ?  this.props.groceries.data.map((item) => {
  //     return <GroceryListItem item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
  //   }) : null;
  //   return items;
  // }

  render(){
       const items = this.props.groceries.data !== undefined ?  this.props.groceries.data.map((item) => {
      return <GroceryListItem item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
    }) : null;
    console.log('more groceriesssssssssssssssssss-',this.props.groceries)
    return (
      <div>
        <ul>
          {/* {this.mappedItems()} */}
          {items}
        </ul>
      </div>
    )

  }
}

export default GroceryList