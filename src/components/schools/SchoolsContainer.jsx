import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import SingleSchool from './SingleSchool'

class SchoolsContainer extends React.Component{

  state ={
    searchbar: "all",
    filters: []
  }






  render(){


    let arrayOfSchools = this.props.schools.map(school => {
      return <SingleSchool key={school.id} school={school} />
      
    })


    return(
      <div>
        <h2>List of Schools in NYC</h2>
        <ul>
            {arrayOfSchools}
        </ul>

      </div>


    )
  }
}




let mapStateToProps = (globalState) => {
  return {
      schools: globalState.infoAboutSchools.schools
  }
}
export default connect(mapStateToProps)(SchoolsContainer)