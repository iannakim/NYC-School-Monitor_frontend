import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import './App.css';
import Logo from './logo'
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
        < Logo />
        <h3> NYC SCHOOL MONITOR</h3>
        <p>Logged in as: {this.props.user}</p>

        <NavLink to="/" activeClassName="selected">
          Home
        </NavLink>

        <NavLink to="/main" activeClassName="selected">
          Search Schools
        </NavLink>

        <NavLink to="/saved" activeClassName="selected">
          Saved Schools
        </NavLink>

        <NavLink to="/login" activeClassName="selected">
          Log In
        </NavLink>

        <NavLink to="/signup" activeClassName="selected">
          Sign Up
        </NavLink>

        <Switch>
          <Route exact path='/'>
            <h3>welcome to nyc school monitor home page!</h3>
          </Route>

          <Route path='/main'>
            <SchoolsContainer />
          </Route>

          <Route path='/login' component={LogIn} />
        </Switch>
      </div>
    )
  }
}



// -----------------------------------------------------------------

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

let mapStateToProps = (globalState) => {
  return {
      user: globalState.infoAboutUser.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
