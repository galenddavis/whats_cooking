import {REMOVEGROCERYITEM,
   RECIEVE_ALL_GROCERIES, 
   RECIEVE_GROCERY_ITEM } 
   from '../actions/grocery_action'
import groceries_container from '../components/groceries/groceries_container';



   const groceryReducer = (state ={data: []}, action ) => {
     Object.freeze(state);

     switch (action.type) {
       case RECIEVE_GROCERY_ITEM:
         return action.item
      case RECIEVE_ALL_GROCERIES:
        console.log('receiveall+++++++++++++',action.items.data)
        return {data: action.items.data};
      case REMOVEGROCERYITEM:
        const newState = Object.assign({},state);
        console.log('action===========',action)
        console.log('actionIIIIIIIIIIIIII',state)
        return {data: newState.data.filter(ele => ele._id !== action.item )};
      default:
        return state;
     }
   }

   export default groceryReducer;
