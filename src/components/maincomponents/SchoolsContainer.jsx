import React from 'react'
import {connect} from 'react-redux'


class SchoolsContainer extends React.Component{

  state ={
    searchbar: "all",
    filters: []
  }






  render(){

    let arrayOfSchools = this.props.schools.map(school => {
      return <div className="school-info" key={school.id}>
                <div>
                <h3> {school.name} </h3>
                </div>
                <div>
                  <p>{school.address}, {school.city} {school.zipcode}</p>
                </div>
            </div> 
    })


    return(
      <div>
        <h1>List of NYC Schools</h1>
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