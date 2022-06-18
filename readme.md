# Welcome to Grassdoor!

![Grassdoor](grassdoor.gif)

# Intro
This is the world's best app for judging the lawns of your neighbors. Think of it like Glassdoor, the  company review site, but for lawns.

# Backend Overview
Structurally, there are two sqlite3 tables here:
- lawns (where entries have names, addresses, and image URLs)
- reviews (where entries have authors, bodies, stars, and lawn_ids)

Two models in Ruby (Lawn, Review) use Active Record to define the relationship between the two tables: Lawns have many Reviews, Reviews belong to Lawns. Active Record then gives the full abilities to interact with those models, e.g., finding the last entry in the Lawns table with 'Lawn.last' as long as we have a foreign key in the Reviews table, which we do with the 'lawn_id' column.

In the application controller, we set up an interface for front-end apps to grab JSON objects that contain the data they want. In particular, I've defined the ability for users to Create and Read entries in the Lawns table, and have full Create, Read, Update, Delete abilities for the Reviews table. 

# Frontend Overview
The frontend is a pretty simple one-page React app. It's easiest to understand component by component:
- App displays the header for every page, and uses React Router to switch between the Home and LawnDetail components depending on the path the user has taken through the app
- Home fetches a list of all the lawns from the backend, stores them in state, displays them using LawnCard components, and has an form that can be used to add lawns, sending POST requests to the backend on submission and updating the lawn list in state
- Clicking on the name of a lawn brings you to a particular LawnDetail page, which contains the LawnCard, as well as ReviewCard components for each review associated with that lawn. Users have buttons to Delete reviews (that trigger the backend to destroy that particular row in the reviews table), and add stars to reviews (update the stars field for that review in the reviews table, incrementing it by one). Users also have a form that lets them add new reviews to the table, and then an adder handler that's passed to LawnDetail as a prop from Home brings it back to state. 

