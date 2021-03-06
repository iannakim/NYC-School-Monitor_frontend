# NYC School Monitor
Check out the <a href="https://youtu.be/XhGUIsml7eE"> demo here </a>🎬

See <a href = "https://github.com/iannakim/NYC-School-Monitor_backend"> Backend Repo Here</a>

NYC School Monitor is a React/Redux app powered by Rails API backend that allows users to browse through all 400+ New York City public high schools and publish/share reviews based on their experience. 

## Tech Stack
 * React JS
 * Redux
 * Ruby [2.6.1]
 * Rails [6.0.3.2]
 * NYC Open Data API
 * Google Maps API
 * PostgreSQL
 * Active Record
 * Rack Cors
 * Active Model Serializer
 * BCrypt + JWT
 * localStorage
 * Semantic UI
 * HTML/CSS
 
## Features
1. Users can sign up as one of the 4 roles: 
     * Parent
     * Current Student
     * Teacher
     * Alumni
     
2. Users have access to the following important information on each school:
     * General Info (School overview, grades, address, start-time/end-time)
     * Building Accessibility
     * Graduation rate
     * Attendance rate
     * Available ELL Programs
     * Foreign Language Subjects
     * AP Courses offered
     * Extracurricular Activities & Clubs
     * Transportation Methods

3. Users can utilize the search bar to filter specific schools and see the exact location of the school via google map on the main page.
4. Full CRUD Operation on *School Reviews* (publish, update, and remove) *Saved Schools* List.

## Set Up
  -- part 1--
   * clone this repo and the <a href = "https://github.com/iannakim/NYC-School-Monitor_backend"> backend repo </a> into your local environment
   * cd into the *backend* repository you just cloned and run 'bundle install' to install all gems and dependencies
   * run 'rails db:create' to create the database for the first time (or try 'rails db:reset')
   * run 'rails db:migrate' to create the tables
   * run 'rails db:seed' to seed data for our server
   * run 'rails s' to start the server
   
 -- part 2 --
   * open up another terminal and cd into the *frontend* repo that you've cloned
   * run 'npm install' to aquire all dependencies
   * run 'npm start' to open up your browser and see the application

## Take a Look! 📷
*coming soon*

## Domain Model
*coming soon*

## Build Status
* This project was completed in 10 days for the purpose of the project presentation.

## For Future Improvements
 * Implement different language versions [Spanish, Korean, Chinese, Polish, Arabic, Etc]
 * Add info window on map markers
 * Implement User account page

## Known Issues
 * Saved School does not render up to date (have to refresh page at the moment) -- Working on Redux* --
 * Home component background loads slowly

## Creator
 * [Anna Kim](https://github.com/iannakim) <a href = "https://www.linkedin.com/in/devannakim/"> Let's Connect</a>!  👋🏻

