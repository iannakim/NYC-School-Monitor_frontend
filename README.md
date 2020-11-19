# NYC School Monitor
*Live Demo Coming Soon!*

See <a href = "https://github.com/iannakim/NYC-School-Monitor_backend"> Backend Repo Here</a>

NYC School Monitor is a React/Redux app powered by Rails API backend that allows users to browse through all 400+ New York City public high schools and publish/share reviews based on their experience. Users can sign up as one of the 4 roles: Parent, Current Student, Teacher, or Alumni. The application focuses on inseminating important information regarding each school such as

   * General Info (School overview, grades, address, start-time/end-time)
   * Building Accessibility
   * Graduation rate
   * Attendance rate
   * Available ELL Programs
   * Foreign Language Subjects
   * AP Courses offered
   * Extracurricular Activities & Clubs
   * Transportation Methods

Users can utilize the search bar to filter specific schools and see the exact location of the school via google map on the main page. Lastly, Users can publish, update, and remove reviews and add schools to 'Saved Schools' list.

## Take a Look 📷
<img src='./image/screenshot1.png'> </img>
<img src='./image/screenshot2.png'> </img>

## Tech Stack
 * Ruby [2.6.1]
 * Rails [6.0.3.2]
 * NYC Open Data API
 * Google Maps API
 * PostgreSQL
 * Active Record
 * Rack Cors
 * Active Model Serializer
 * BCrypt + JWT
 * Semantic UI
 * HTML/CSS

## Domain Model
<img src='./image/domainmodel.png'> </img>

## Set Up
 * clone down this repo into local machine --git clone
 * cd into 'Coterie' application
 * run 'bundle install' to install all required dependencies
 * run 'rails db:migrate' to set up the tables for the database
 * run 'rails db:seed' load data
 * run 'rails s' to start the server
 * open the browser and go to 'http://localhost:3000/' to start the app!
 
## Known Issues
Please see issues

## For Future Improvements
 * Improve design elements (look of buttons, background image, text manipulation)
 * Create a logo
 * Add About page
 * Utilize API/CSV file for welcome page
 * If a user is a host they can’t be an attendee
 * Allow users to upload a profile picture
 * Add attribute to meeting for url

## Creator
 * [Anna Kim](https://github.com/iannakim) <a href = "https://www.linkedin.com/in/devannakim/"> Let's Connect</a>!  👋🏻

