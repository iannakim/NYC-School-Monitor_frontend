import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'moment-timezone';

// REDUX STUFF HERE
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'



// ----- School Reducer -----
let initialStateOfSchoolsReducer = {
  schools: [],
  selectedSchool: {}
}

let schoolReducer = (state = initialStateOfSchoolsReducer, action) => {

  switch(action.type){
    case "SET_SCHOOLS_PLEASE":
      let theInfoFromComponent = action.payload
      return {
        ...state,
        schools: theInfoFromComponent
      }
    default:
      return state
  }
}

// ----- User Reducer -----

let initialStateOfUserReducer = {
  username: "",
  token: "",
  reviews: {}
}


let userReducer = (state = initialStateOfUserReducer, action) => {
  switch (action.type) {

    case "SET_USER_INFO":
      return {
        ...state,
        username: action.payload.user.username,
        token: action.payload.token,
        reviews: action.payload.user.reviews
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
