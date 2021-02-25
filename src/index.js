import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import 'moment-timezone';

// REDUX STUFF HERE
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'



// ----- School Reducer -----
let initialStateOfSchoolsReducer = {
  schools: [],
}

let schoolReducer = (state = initialStateOfSchoolsReducer, action) => {

  switch(action.type){
    case "SET_SCHOOLS_PLEASE":
      let theInfoFromComponent = action.payload
      return {
        ...state,
        schools: theInfoFromComponent
      }
    case "ADD_REVIEW":
        let foundSchool = state.schools.find(school => school.id === action.payload.school_id)
        let copyOfReviews = [...foundSchool.reviews, action.payload.review]
        let copyOfSchool = {
          ...foundSchool,
          reviews: copyOfReviews
        }
        let arrayOfSchools = state.schools.map(school => {
          if (school.id === copyOfSchool.id){
            return copyOfSchool
          }
          else { return school }
              })
      return {
        ...state, 
        schools: arrayOfSchools
      }
    case "DELETE_REVIEW":
        let newFoundSchool = state.schools.find(school => school.id === action.payload.school_id)  
        let newCopyOfReviews = newFoundSchool.reviews.filter(review => {
          return review.id !== action.payload.review_id
        })
        let newCopyOfSchools = {
          ...newFoundSchool,
          reviews: newCopyOfReviews
        }
        let newArrayOfSchools = state.schools.map(school => {
          if (school.id === newCopyOfSchools.id){
            return newCopyOfSchools
          }
          else { return school }
        })
        return {
        ...state, 
        schools: newArrayOfSchools
      }
    case "UPDATE_REVIEW":
        let thefoundSchool = state.schools.find(school => school.id === action.payload.school_id)
        let updatedReviews = thefoundSchool.reviews.filter(review => {
          return review.id !== action.payload.review_id
        })
        let updatedCopyOfReviews = [...updatedReviews, action.payload.review]

        let theCopyOfSchool = {
          ...thefoundSchool,
          reviews: updatedCopyOfReviews
        }
        let theNewArrayOfSchools = state.schools.map(school => {
          if (school.id === theCopyOfSchool.id){
            return theCopyOfSchool
          }
          else { return school }
              })
      return {
        ...state, 
        schools: theNewArrayOfSchools
      }
     


      // debugger

    default:
      return state
  }
}


// ----- User Reducer -----

let initialStateOfUserReducer = {
  username: "",
  token: "",
  role: "",
  reviews: [],
  saveds: [],
  selectedSchool: []
}


let userReducer = (state = initialStateOfUserReducer, action) => {
  switch (action.type) {

    case "SET_USER_INFO":
      return {
        ...state,
        username: action.payload.user.username,
        token: action.payload.token,
        role: action.payload.user.role,
        reviews: action.payload.user.reviews,
        saveds: action.payload.user.saveds
      }
      case "LOG_OUT_USER":
        return initialStateOfUserReducer
        
      case "SET_SCHOOL":
        return {
          ...state,
          selectedSchool: action.payload
        }
        
    default:
      return state
  }
}

let POJO = {
  infoAboutSchools: schoolReducer,
  infoAboutUser: userReducer
}

let rootReducer = combineReducers(POJO)



let store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
