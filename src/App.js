import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux'


import Logo from './components/logo'
import Navbar from './components/navbar'
import Home from './components/Home'
import SchoolsContainer from './components/maincomponents/SchoolsContainer'
import LogIn from './components/entrycomponents/LogIn'
import SignUp from './components/entrycomponents/SignUp'




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
        < Navbar />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/main' exact component={SchoolsContainer}/>

          <Route path='/login' component={LogIn} />
          <Route path="/signup" component={SignUp}/>
          <Route render={ () => <p>Page not Found</p> } />
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
