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

  //callback function sent down to searchbar as prop.
    //received data will reset the state
  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }



  render(){

    //filter and rerender the list of schools using the searchTerm on the state
    let filteredArrayOfSchools = this.props.schools.filter(school => {
      return school.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    let arrayOfSchools = filteredArrayOfSchools.map (school => {
      return <SingleSchool key={school.id} school={school} />
    })


    return(
      // Renders search bar and list of high school directory
    <Grid style={{height: "100%"}}>
        <Grid.Row style={{height: "100%"}}>
          <Grid.Column width={6} style={{padding: "20px 20px", height: "100%", overflowY: "hidden"}}>
              <Searchbar
                searchTerm={this.state.searchTerm}
                changeSearchTerm={this.changeSearchTerm}
              />
              {/* <Filter /> */}
              {/* Next step: implement filter component and render out filtered array result */}
            <br /><br />

            {/* Loading UI while the content if being fetched from backend. this takes about 3 seconds. Need to make it faster */}
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