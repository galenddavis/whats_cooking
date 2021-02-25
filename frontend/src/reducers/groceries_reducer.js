import {REMOVEGROCERYITEM,
   RECIEVE_ALL_GROCERIES, 
   RECIEVE_GROCERY_ITEM } 
   from '../actions/grocery_action'

   const groceryReducer = (state ={}, action ) => {
     Object.freeze(state);

     switch (action.type) {
       case RECIEVE_GROCERY_ITEM:
         return action.grocery
       case RECIEVE_ALL_GROCERIES:
         return Object.assign({}, state, {groceries: action.groceries});
       case REMOVEGROCERYITEM:
         const newState = Object.assign({},state);
         delete newState[action.groceryId];
         return newState
       default:
         return state;
     }
   }

   export default groceryReducer;