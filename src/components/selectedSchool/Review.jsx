import React from 'react';
import Moment from 'react-moment';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Card, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';


class Review extends React.Component{
  
  handleDelete = () => {

    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this review?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {


    fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
      method: "DELETE"
  })
      .then(res => res.json())
      .then((deletedObj) => {
          let deletedReviewWithID = {
            review_id: this.props.review.id,
            school_id: this.props.school.id
          }
          this.props.deleteReview(deletedReviewWithID)

      })



    },
  },
  {
    label: "No",
    // onClick: () => alert('Click No')
  },
],
});



  }
  
  render(){

    let {user, content, created_at} = this.props.review

    return( 
    <Card>
      <Card.Content>
          <Card.Header><h5>{content}</h5></Card.Header>
          <Card.Description>
              comment by: {user.username} on: <Moment format="MM/DD/YYYY">{created_at}</Moment>
          </Card.Description>
      </Card.Content>
        
        {/* if the logged in user matches the user.username, then render buttons */}
        
        { this.props.currentUser === user.username
            ?
            <div> 
              <Card.Content>
                  <div>
                      <Button floated='right'>
                        Edit
                      </Button>
                  </div>
              </Card.Content>

            
              <Card.Content>
                  <div>
                      <Button floated='right' onClick={this.handleDelete}>
                        Delete
                      </Button>
                  </div>
              </Card.Content>
            </div>
              :
              null
        }


    </Card>
    )
  }
}

let mapStateToProps = (globalState) => {
  return {
      currentUser: globalState.infoAboutUser.username
  }
}

let deleteReview = (deletedReviewID) => {
  return {
      type: "DELETE_REVIEW",
      payload: deletedReviewID
  }
}

let mapToDispatch = {deleteReview}

export default connect(mapStateToProps, mapToDispatch)(Review)