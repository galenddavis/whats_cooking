const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,    //user object id
    ref: 'users'                    // reference name of model - users
  },
  recipeTitle:{
    type: String,
    required: true
  },
  recipeSource: {
    type: String,
  },
  recipeImage: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe