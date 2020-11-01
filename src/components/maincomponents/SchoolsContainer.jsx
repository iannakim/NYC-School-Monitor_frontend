import React from 'react'
import {connect} from 'react-redux'


class SchoolsContainer extends React.Component{

  state ={
    searchbar: "all",
    filters: []
  }


handleClick = () => {
  console.log("CLICKED!")
}



  render(){

    let arrayOfSchools = this.props.schools.map(school => {
      return <div className="school-info" key={school.id}>
                <div>
                  <h4 onClick={this.handleClick}> {school.name} </h4>
                </div>

                <div>
                  <p>{school.address}, {school.city} {school.zipcode}</p>
                </div>

                <div>
                  <button className="school-button" onClick={this.handleClick}>View Info</button>
                </div>

            </div> 
    })


    return(
      <div>
        <h2>List of NYC Schools</h2>
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