import React from 'react';
import {connect} from 'react-redux'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
  position: 'absolute',
  marginTop: '1%',
  marginLeft: '1%',
  width: '70%',
  height: "90vh",
  border: 'solid 1px white',
  borderRadius: "5px"
};


class MapContainer extends React.Component {

  

  displayMarkers = () => {
    let {schools} = this.props

    let filteredArray = schools
    // debugger

    if (this.props.searchTerm !== ""){
      filteredArray = schools.filter((school) => {
        return school.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
      })
    }
    

    return filteredArray.map((school, index) => {
    return <Marker 
              key={index} 
              id={school.id}
              options={{icon: 'https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/map_marker_base-32.png'}} 
              position={{
        lat: school.latitude,
        lng: school.longitude
    }}
              onClick={() => console.log(`${school.name}`)} />
    })
}

  render(){
    return (
      <div className="wrapper">
          <Map 
              className="map"
              google={this.props.google}
              zoom={11}
              style={mapStyles}
              initialCenter={{ lat: 40.711185, lng: -73.888122}}>
              {this.displayMarkers()}
          </Map>
      </div>
    ) 
  }
}


console.log(process.env.REACT_APP_API_KEY_GOOGLE_MAPS)


  let mapStateToProps = (gState) => {
    return {
        schools: gState.infoAboutSchools.schools
    }
  }

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_GOOGLE_MAPS
})(MapContainer))
