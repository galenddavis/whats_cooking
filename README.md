# whats_cooking

## Background and Overview

What's Cooking? is a minimal viable product that addresses the age old question of what's for dinner. With our app, you select what ingredients you already have and returns recipes that match the ingredients selected. 
The site will allow users to enter ingredients and search recipes without being signed in, but if they want to save a fridge for later use, they will need to create an account. 
 
## Functionality and MVPs

On top of basic user auth we will be building: 
* A way for a user to save a list of ingredients that they have in their home. 
* A search function using a recipe site API to find the closest matching recipes. 
* Functionality that gives users a list of ingredients they are missing from a selected recipe. 
* With time permitting, we want to build a mailer that will send a user a list of the remaining ingredients they need to purchase for their selected recipe.  


## Technologies and Technical Challenges

What's Cooking is built with the MERN stack including MongoDB, Express, React and Node and styled in using SCSS.
The user's fridge will be saved to the database and linked to their account. 
They will also be able to update their ingrdients to match what they have before and after searching. 
Technical Challenges: 
* Setting up our selected Recipe Website API to get filtered results based on the selected ingredient parameters. 
* Setting up user auth in the MERN stack. 
* Getting user input to connect to both the database and the search API. 
* Getting a live, asynch search result index that updates as you add ingredients. 

## Group Members and Work Breakdown

* Stephen Yim, Jose Mejia, Gabriel Reiter, Galen Davis

### Stephen
| Day | Task |
| Day 1 | User auth |
|Day 2 | Creating the fridge |
| Day 3 | Whole CSS |
| Day 4 | Pushing to Heroku |

### Gabe
| Day | Task |
| Day 1 |  |



