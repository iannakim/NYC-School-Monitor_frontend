import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Logo from './logo'
import Nav from './nav'
import SchoolsContainer from './components/maincomponents/SchoolsContainer'
import LogIn from './components/entrycomponents/LogIn'
import {connect} from 'react-redux'



class App extends React.Component{
  

  componentDidMount(){
    fetch("http://localhost:3000/schools")
      .then(res => res.json())
      .then((schoolsArray) => {
        this.props.setSchools(schoolsArray)
      })   
      
    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in",{
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
        console.log(resp, "RESPONSE")
        if(resp.token){
          this.props.setUserInfo(resp)
        }
      })

    }
  }







  render(){
    return(
      <div>
        <h1> NYC SCHOOL MONITOR</h1>
        < Logo />
        < Nav />

        <Switch>

          <Route path='/main'>
            <SchoolsContainer />
          </Route>

          <Route path='/login' component={LogIn} />
        </Switch>
      </div>
    )
  }
}

let setSchools = (array) => {
  return {
    type: "SET_SCHOOLS_PLEASE",
    payload: array
  }
}




let setUserInfo = (userInfo) => {
  return {
      type: "SET_USER_INFO",
      payload: userInfo
  }
}

let mapDispatchToProps = {
  setSchools: setSchools,
  setUserInfo: setUserInfo 
}

export default connect(null, mapDispatchToProps)(App);
