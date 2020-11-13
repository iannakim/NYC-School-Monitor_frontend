import React from 'react'
import {Link, Switch, Route, withRouter, Redirect} from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux'


// ----- components ----------
import Navbar from './components/navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import SavedList from './components/saved/SavedList'
import Account from './components/user/Account'
import SchoolsContainer from './components/schools/SchoolsContainer'
import LogIn from './components/entry/LogIn'
import SignUp from './components/entry/SignUp'
import SelectedSchoolPage from'./components/selectedSchool/SelectedSchoolPage'
import ViewSchoolContainer from'./components/selectedSchool/SelectedSchoolPage'



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
      .then(userInfo => {
        if(userInfo.token){
          this.props.setUserInfo(userInfo)
        }
      })

    }
  }

  showSingleSchool = (routerProps) => {
    let id = routerProps.match.params.id
    let num_id = parseInt(id)
    let foundSchool = this.props.schools.find(school => school.id === num_id)

    if(foundSchool){
      return <SelectedSchoolPage {...routerProps} foundSchool={foundSchool} />
    } else {
      return <p>Loading...</p>
    }
  }


  render(){
    return(
      <div>
        < Navbar />
        <div style={{
                        position: 'fixed',
                        top: "50px",
                        width: "100%",
                        height: "calc(100% - 50px)",
                        backgroundColor: '#FFF5EE',
                        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/273/733/original/liberty-statue-on-new-york-city-background-vector-illustration.jpg)`,
                        color: "black",
                        fontFamily:'Helvetica Neue',
                        fontSize: '1.2rem',
                        overflowY: "auto",
                        overflowX: "hidden"
                    }}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/schools" exact component={SchoolsContainer}/>
            <Route path="/schools/:id/" render={this.showSingleSchool}/>
            <Route path="/viewschool" component={ViewSchoolContainer}/>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/saved" component={SavedList} />
            <Route path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </div>
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
      user: globalState.infoAboutUser.username,
      schools: globalState.infoAboutSchools.schools,
      selectedSchool: globalState.infoAboutUser.selectedSchool
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
