import React from 'react'
import {connect} from 'react-redux'
import SingleSchool from './SingleSchool'
import Searchbar from './Searchbar'
import MapContainer from './MapContainer';
import { Grid, Segment } from 'semantic-ui-react'

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
      // <div>
      //   <h2>List of Schools in NYC</h2>
    <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column width={8}>

                  
                    <Searchbar 
                        searchTerm={this.state.searchTerm}
                        changeSearchTerm={this.changeSearchTerm}
                    />
                    <ul>
                            {arrayOfSchools}
                    </ul>

            </Grid.Column>

            <Grid.Column width={8}>
                  
                    <MapContainer searchTerm={this.state.searchTerm}/>

            </Grid.Column>
          </Grid.Row>
    </Grid>

         
      // </div>


    )
  }
}




let mapStateToProps = (globalState) => {
  return {
      schools: globalState.infoAboutSchools.schools
  }
}
export default connect(mapStateToProps)(SchoolsContainer)