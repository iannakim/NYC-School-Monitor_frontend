import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

class SavedList extends React.Component{
  
  state = {
    schools: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/getSaved")
    .then(res => res.json())
    .then((allSavedSchools) => {
      // console.log(allSavedSchools)
      this.setState({
        schools: allSavedSchools
      })
    })
  }

  handleClick = (savedObjId) => {
    confirmAlert({
      title: "Confirm Remove",
      message: "Are you sure you want to remove this saved school?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`http://localhost:3000/deleteSaved/${savedObjId}`, {
              method: "DELETE"
            })
            .then(res => res.json())
            .then((allSavedSchools) => {
              this.setState({
                schools: allSavedSchools
              })
            })
          },
        },
        {
          label: "No",
        },
      ],
    });
  }


  handleSchoolClick = (obj) => {
    this.props.history.push(`/schools/${obj.school.id}`)
  }

  render() {

    let arrayOfSavedSchools = this.state.schools.map(savedObj => {
      return  <Card.Group>
                <Card fluid>
                  <Card.Content onClick={() => {this.handleSchoolClick(savedObj)}}
                      header={""}
                      style={{
                        height: "60px",
                        fontSize: '1rem',
                      }} 
                  >
                    <span style={{fontSize: "18px", lineHeight: "40px"}}>{savedObj.school.name}</span>
                  </Card.Content>
                  <Card.Content description 
                      style={{
                        height: "48px",
                        color: "black",
                        padding: "6px 10px",
                        textAlign: "right"
                      }} >
                    <Button onClick={() => {this.handleClick(savedObj.id)}}>
                      <Icon name="trash alternate outline"></Icon>
                      Remove
                    </Button>
                  </Card.Content>
                </Card>
              </Card.Group>
      
    })

      return(
        <center>
          <div style={{width: "50%", marginTop: "40px", padding: "20px", background: "rgba(255,255,255,0.6)"}}>
            <h1>My Saved Schools</h1>
              {
                arrayOfSavedSchools.length > 0 ?
                <div>
                  {arrayOfSavedSchools}
                </div>
                :
                <div>
                  <p>You haven't saved any schools!</p>
                </div>
              }
          </div>
        </center>
    )
  }
}

export default SavedList
