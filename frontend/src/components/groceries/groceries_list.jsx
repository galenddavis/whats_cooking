import React from 'react';
import GroceryListItem from './grocery_list_item'

class GroceryList extends React.Component {
  constructor(props){
    super(props)
    this.mappedItems = this.mappedItems.bind(this);
    // this.state = {list: this.props.groceries.data};
    // this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroceryList(this.props.currentUser.id)
  }

  // deleteItem(item){
  //   console.log(this.props.groceries.data)
  //   const newList = (item)
  //   this.setState({list: newList}
  //   )
  //   console.log(this.state)
  // }

  mappedItems() {
    console.log('groceriesooooooooooooooo',this.props.groceries)
    const items = this.props.groceries.data.map((item) => {
      return <GroceryListItem state={this.state} item={item} deleteGroceryItem={this.props.deleteGroceryItem}/>
    })
    
    return items;
  }

  render(){
    console.log(this.props.groceries)
    return (
      <div>
        <ul>
          {/* {this.props.groceries ==={} ? this.test() : this.mappedItems() } */}
          {this.mappedItems()}
        </ul>
      </div>
    )

  }
}

export default GroceryList