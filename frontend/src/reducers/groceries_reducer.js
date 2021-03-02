import {REMOVEGROCERYITEM,
   RECIEVE_ALL_GROCERIES, 
   RECIEVE_GROCERY_ITEM } 
   from '../actions/grocery_action'

   const groceryReducer = (state ={data: []}, action ) => {
     Object.freeze(state);
     switch (action.type) {
       case RECIEVE_GROCERY_ITEM:
         return action.item

      case RECIEVE_ALL_GROCERIES:
        return {data: action.items};

      case REMOVEGROCERYITEM:
        const newState = Object.assign({},state);
        return {data:{data: newState.data.data.filter(ele => ele._id !== action.item )}};
        
      default:
        return state;
     }
   }

   export default groceryReducer;

