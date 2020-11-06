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
          <Card fluid color='purple' onClick={this.handleClick}>
                  <Card.Content header={name} />
                  <Card.Content description>
                    <Icon name="map marker alternate"></Icon> {address} {city} {zipcode} 
                  </Card.Content>
                  <Card.Content extra>
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