import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

class SingleSchool extends React.Component{

handleClick = () => {
  this.props.setSchoolInfo(this.props.school)
  this.props.history.push(`/schools/${this.props.school.id}`)
}


  render(){

    let {name, address, city, zipcode} = this.props.school

    return(
        <Card onClick={this.handleClick}>
                <Card.Content>
                    <Card.Header><h3>{name}</h3></Card.Header>
                    <Card.Description>
                        {address}, {city} {zipcode}
                    </Card.Description>
                </Card.Content>
        </Card>
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