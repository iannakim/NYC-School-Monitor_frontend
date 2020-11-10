import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Card, Button, Icon } from 'semantic-ui-react'

class SingleSchool extends React.Component{

handleClick = () => {
  this.props.setSchoolInfo(this.props.school)
  this.props.history.push(`/schools/${this.props.school.id}`)
}


  render(){

    let {name, address, city, zipcode, grades} = this.props.school

    return(
      <Card.Group>
          <Card fluid color='blue' onClick={this.handleClick}>
                  <Card.Content 
                      header={name}
                      style={{
                        height: "100%",
                        fontSize: '1.3rem',
                        // backgroundImage: `url(https://img.freepik.com/free-vector/illustration-space_29937-1093.jpg?size=626&ext=jpg)`,
                      }} 
                  />
                  <Card.Content description                       
                      style={{
                        height: "60%",
                        color: "black"
                      }} >
                    <Icon name="map marker alternate"></Icon> {address} {city} {zipcode} 
                  </Card.Content>
                  <Card.Content extra
                      style={{
                        height: "90%",
                        fontSize: '1.1rem',
                        color: "black"
                  }}
                  >
                    <Icon name="accessible"></Icon><Icon name="graduation"></Icon> {grades} 
                  </Card.Content>

          </Card>
      </Card.Group>
    )
  }
}

let setSchoolInfo = (schoolInfo) => {
  return {
      type: "SET_SCHOOL",
      payload: schoolInfo
  }
}

let mapDispatchToProps = {
  setSchoolInfo: setSchoolInfo
}

export default connect(null, mapDispatchToProps)(withRouter(SingleSchool))