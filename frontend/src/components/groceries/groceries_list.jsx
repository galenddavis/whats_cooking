import React from 'react';

class GroceryList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const mappedItems = this.props.groceries !== undefined ? this.props.grocers.map((item) => {
      return <GroceryListItem item={item} removeItem={this.props.removeItem}/>
    }): null
    return (
      <div>
        <ul>
          {mappedItems}
        </ul>
      </div>
    )

  }
}

export default GroceryList