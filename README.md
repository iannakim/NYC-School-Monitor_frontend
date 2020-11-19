# NYC School Monitor
*Live Demo Coming Soon!*

See <a href = "https://github.com/iannakim/NYC-School-Monitor_backend"> Backend Repo Here</a>

NYC School Monitor is a React/Redux app powered by Rails API backend that allows users to browse through all 400+ New York City public high schools and publish/share reviews based on their experience. Users can sign up as one of the 4 roles: Parent, Current Student, Teacher, or Alumni. The application focuses on inseminating important information regarding each school such as

* General Info (School overview, grades, address, start-time/end-time)
* Building Accessibility
* Graduation rate (as of 2019)
* Attendance rate (as of 2019)
* Available ELL Programs
* Foreign Language Subjects offered
* Advanced Placement Courses offered
* Extracurricular Activities & Clubs
* Transportation Methods via Bus and Subway

Users can utilize the search bar to filter specific schools and see the exact location of the school via google map on the main page. Lastly, Users can publish, update, and remove reviews and add schools to 'Saved Schools' list.

## Take a Look 📷
<img src='./image/screenshot1.png'> </img>
<img src='./image/screenshot2.png'> </img>

## Features

### Password Authentication
 * Validate current users and keeps them logged in using sessions
 * Authenticate users' passwords with BCrypt

### CRUD Operations
 Users (the Attendee) can:
  * log into the application
  * create an account
  * see an error message if their account input is wrong
  * register for a meeting
  * view their meetings
  * browse available meetings

 User (the Host) can:
  * log into the application
  * create a meeting
  * change their meetings
  * cancel the meeting
  
 ## Set Up
 * Clone down this repo into local machine --git clone <git repository>
 * CD into 'Coterie' application
 * Run 'bundle install' to install all required dependencies
 * Run 'rails db:migrate' to set up the tables for the database
 * Run 'rails db:seed' load data
 * Run 'rails s' to start the server
 * Open the browser and go to 'http://localhost:3000/' to start the app!

### Active Record Associations
 * There are 5 models that have the following associations ```has_many, belongs_to and has_many, through: ```

## Domain Model
<img src='./image/domainmodel.png'> </img>
 
## Tech Stack
 * Ruby on Rails
 * PostgreSQL
 * HTML/CSS
 * Active Record

## Tools
 * Bootstrap
 * BCrypt
 * Custom CSS

## Build Status
 * This project is complete for the purpose of the project deadline.

## Future Features
 * Improve design elements (look of buttons, background image, text manipulation)
 * Create a logo
 * Add About page
 * Utilize API/CSV file for welcome page
 * If a user is a host they can’t be an attendee
 * Allow users to upload a profile picture
 * Add attribute to meeting for url

## Creator
 * [Anna Kim](https://github.com/iannakim) <a href = "https://www.linkedin.com/in/devannakim/"> Let's Connect</a>!  👋🏻

 
## Acknowledgements
 We would like to thank:
  * Sylwia Vargas
  * Eric Kim
  * Annie Zheng
  * Isabel K. Lee
  * the Code Bender Cohort
