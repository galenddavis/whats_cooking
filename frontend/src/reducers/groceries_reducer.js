import {REMOVEGROCERYITEM,
   RECIEVE_ALL_GROCERIES, 
   RECIEVE_GROCERY_ITEM } 
   from '../actions/grocery_action'



   const groceryReducer = (state ={data: []}, action ) => {
     Object.freeze(state);
     let newState = Object.assign({}, state);
     switch (action.type) {
       case RECIEVE_GROCERY_ITEM:
         return action.item
      case RECIEVE_ALL_GROCERIES:
        // debugger
        // console.log(action.items)
        return action.items.data;
        
        // newState.user = action.items.data;
        // return newState;
      case REMOVEGROCERYITEM:
        delete newState[action.groceryId];
        return newState
      default:
        return state;
     }
   }

   export default groceryReducer;