import React from 'react';
import GroceryListItem from './grocery_list_item'

class GroceryList extends React.Component {
  constructor(props){
    debugger
    super(props)

    this.mappedItems = this.mappedItems.bind(this);
    this.test = this.test.bind(this)
  }

  componentDidMount() {
    this.props.fetchGroceryList(this.props.currentUser.id)
    // if (this.props.groceries === null) {
    //   debugger
    //   this.props.fetchGroceryList(this.props.currentUser.id)
    // } else {
    //   return
    // }
  }

  mappedItems() {
    console.log(this.props.groceries)
    const items = this.props.groceries.data.map((item) => {
      return <GroceryListItem item={item} removeItem={this.props.removeItem}/>
    })
    return items;
  }

  test() {
    console.log(this.props.groceries)
  }

  render(){
    debugger
    
    console.log(this.props.groceries)
    // const mappedItems = this.props.groceries.data.length > 0 ? this.props.groceries.data.map((item) => {
    //   return <GroceryListItem item={item} removeItem={this.props.removeItem}/>
    // }): null
    // console.log(mappedItems)
    return (
      <div>
        <ul>
          {this.props.groceries ==={} ? this.test() : this.mappedItems()}
          {/* {mappedItems} */}
        </ul>
      </div>
    )

  }
}

export default GroceryList