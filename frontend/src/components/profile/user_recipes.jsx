import React from 'react';

class UserRecipes extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.apiRecipeId}</h3>
        </div>
    );
  }
}

export default UserRecipes;