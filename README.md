# whats_cooking

![Screen Shot 2021-03-02 at 5 47 28 PM](https://user-images.githubusercontent.com/66323451/109725616-64f87680-7b7f-11eb-80ff-3a7fb6ceac0f.png)
## Background and Overview

What's Cooking? is a minimal viable product that addresses the age old question of what's for dinner. With our app, you select what ingredients you already have and returns recipes that match the ingredients selected. 
The site will allow users to enter ingredients and search recipes without being signed in, but if they want to save a fridge for later use, they will need to create an account. 
 
## Functionality and MVPs

On top of basic user auth we will be building: 
* A way for a user to save a list of ingredients that they have in their home.
 ![Screen Shot 2021-03-02 at 5 45 36 PM](https://user-images.githubusercontent.com/66323451/109725434-25318f00-7b7f-11eb-9dfa-3fe1856be701.png) 
* A search function using a recipe site API to find the closest matching recipes. 
 ![Screen Shot 2021-03-02 at 5 44 01 PM](https://user-images.githubusercontent.com/66323451/109725317-f3b8c380-7b7e-11eb-98c1-231c864ddd65.png)
* Functionality that gives users a list of ingredients they are missing from a selected recipe.
 ![Screen Shot 2021-03-02 at 5 38 40 PM](https://user-images.githubusercontent.com/66323451/109724865-3fb73880-7b7e-11eb-9786-5db9451f06ec.png) 
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

* Backend Routing and User auth(backend)
* Front end integration with API


### Jose 

* Creating of Log-In / Sign-Up modal 
* Styling and design


### Galen 

* Construction of Sidebar menu
* Styling and design
* Backend API search route setup


### Gabe

* Backend Routing and User auth(backend)
* Front end integration with API


