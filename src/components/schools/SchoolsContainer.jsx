import React from 'react'
import {connect} from 'react-redux'
import SingleSchool from './SingleSchool'
import Searchbar from './Searchbar'
import Filter from './Filter'
import MapContainer from './MapContainer';
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

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
    <Grid style={{height: "100%"}}>
        <Grid.Row style={{height: "100%"}}>
          <Grid.Column width={6} style={{padding: "20px 20px", height: "100%", overflowY: "hidden"}}>
              <Searchbar
                searchTerm={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
              />
              {/* <Filter /> */}
            <br /><br />
            <div style={{height: "100%", overflowY: "auto"}}>
              {
                arrayOfSchools.length > 0 ? 
                arrayOfSchools :
                <div class="ui active centered inline massive text loader" style={{color: "white"}}>
                  Loading
                </div>
              }
            </div>
          </Grid.Column>
          <Grid.Column width={10} style={{padding: "0px"}}>
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