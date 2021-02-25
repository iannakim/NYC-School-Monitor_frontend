import React from 'react';
import {connect} from 'react-redux'
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import marker from '../../images/school.png';


const mapStyles = {
  position: 'absolute',
  marginTop: '0%',
  marginLeft: '0%',
  width: '100%',
  height: '100%',
  borderRadius: "5px"
};


class MapContainer extends React.Component {

  state = { open: false }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })



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
              options={{icon: marker}} 
              position={{
                  lat: school.latitude,
                  lng: school.longitude
              }}
              onClick={() => {
                
              }} />
              //should I setState selected shcool here? and then render InfoWindow below?
    })
}

  render(){

    const { open } = this.state

    return (
      <div>
          <Map 
              className="map"
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 40.711185, lng: -73.888122}}>
              {this.displayMarkers()}
              {/* {selectedRestaurant &&(
                            <InfoWindow
                                position={{
                                    lat: selectedRestaurant.latitude,
                                    lng: selectedRestaurant.longitude
                                }}
                                onCloseClick={() => {
                                    setSelectedRestaurant(null);
                                }}>
                                <div>
                                    <div id='rstName_on_map'
                                        onClick={() => {
                                            props.history.push(`/restaurants/${selectedRestaurant.id}`)
                                        }}>
                                        {selectedRestaurant.name}
                                    </div>
                                    <p>{selectedRestaurant.cuisines}</p>
                                    <p>{selectedRestaurant.phone_number}</p>
                                    <p>{selectedRestaurant.address}</p>
                                    <p>{selectedRestaurant.user_rating_text} with {selectedRestaurant.user_rating} <Icon name='star' /> </p>

                                </div>
                            </InfoWindow>
                        )} */}
          </Map>
      </div>
    ) 
  }
}



  let mapStateToProps = (gState) => {
    return {
        schools: gState.infoAboutSchools.schools
    }
  }

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_GOOGLE_MAPS
})(MapContainer))
