const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroceryListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
      type: String,
      required: true
    }
})



const GroceryList = mongoose.model('grocerylist', GroceryListSchema);

module.exports = GroceryList