import React from 'react'
import {connect} from 'react-redux'
import { Card, Button, Icon } from 'semantic-ui-react'
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

class SavedList extends React.Component{
  
  state = {
    schools: []
  }

  // EDIT: SAVED data is being fetched on initial load through userInfo onREDUX 


  // componentDidMount() {
  //   fetch("http://localhost:3000/getSaved")
  //   .then(res => res.json())
  //   .then((allSavedSchools) => {

  //     this.setState({
  //       schools: allSavedSchools
  //     })
  //   })

  // }


  // CURRENTLY WORKING ON: NEED TO UPDATE BACKEND THROUGH *REDUX* NOW
    //backend update no longer re-renders the page
      // only shows when you refresh the page

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


    let arrayOfSavedSchools = this.props.saveds.map(savedObj => {
      return  <Card.Group>
                <Card fluid>
                  <Card.Content onClick={() => {this.handleSchoolClick(savedObj)}}
                      style={{
                        cursor: 'pointer',
                        height: "60px",
                        fontSize: '1rem'
                      }} 
                  >
                    <span style={{fontSize: "18px", lineHeight: "40px"}}>{savedObj.school.name}</span>
                  </Card.Content>
                  <Card.Content 
                      style={{
                        height: "48px",
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

let mapStateToProps = (globalState) => {
  return {
      saveds: globalState.infoAboutUser.saveds
  }
}

// NEED TO DISPATCH when user clicks REMOVE button

export default connect(mapStateToProps, null)(SavedList)
