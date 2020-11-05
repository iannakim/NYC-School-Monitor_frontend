import React from 'react'
import {connect} from 'react-redux'
import SingleSchool from './SingleSchool'
import Searchbar from './Searchbar'
import MapContainer from './MapContainer';

class SchoolsContainer extends React.Component{

  state ={
    searchTerm: "",
    filters: []
  }


  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }



  render(){

    let filteredArrayOfSchools = this.props.schools.filter(school => {
      return school.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    let arrayOfSchools = filteredArrayOfSchools.map (school => {
      return <SingleSchool key={school.id} school={school} />
    })


    return(
      <div>
        <h2>List of Schools in NYC</h2>
        <Searchbar 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <ul>
            {arrayOfSchools}
        </ul>
          <MapContainer searchTerm={this.state.searchTerm}/>
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