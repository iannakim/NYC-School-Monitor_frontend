import React from 'react';
import Moment from 'react-moment';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Card, Button, Portal, Segment, Header, Form, TextArea, Comment } from 'semantic-ui-react';
import {connect} from 'react-redux';
import teacher from '../../images/teacher.png';
import alumni from '../../images/graduate.png';
import student from '../../images/student.png';
import parent from '../../images/parent.png';

class Review extends React.Component {
  
  state = { 
    open: false,
    content: this.props.review.content
  }

  // Edit review  -----------------------------------

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  handleChange = (evt) => {
    console.log(evt.target.value)
    this.setState({
        [evt.target.name]: evt.target.value
    })
  } 


  handleSubmit = () => {

    fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
      method: "PATCH",
      headers: {
          "content-type": "Application/json"
      },
      body: JSON.stringify({
          content: this.state.content,
          school_id: this.props.school.id
      })
  })
      .then(res => res.json())
      .then(updatedReview => {
        let reviewWithId = {
            review: updatedReview,
            review_id: this.props.review.id,
            school_id: this.props.school.id
          }

        this.props.updateReview(reviewWithId)
      })
      this.state.open = false;
  }






  //Delete review -----------------------------------

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

  getTag = (role) => {
    switch (role) {
      case "Parent": return <img class="icon" src={parent} />
      case "Current Student": return <img class="icon" src={student} />
      case "Alumni": return <img class="icon" src={alumni} />
      case "Teacher": return <img class="icon" src={teacher} />
      default:
        return <div></div>
    }
  }


  
  render() {

    const { open } = this.state

    let {user, content, created_at} = this.props.review
    
    return( 
      <Card style={{width: "80%"}}>  
        <Comment.Group size="large">
          <Comment>
            <Comment.Avatar alt={user.role} src={this.getTag(user.role)} />
            <Comment.Content>
              <Comment.Author> {user.username} </Comment.Author>
              <Comment.Metadata>
                <div>Posted by {user.role} on <Moment format="MM/DD/YYYY">{created_at}</Moment></div>

              </Comment.Metadata>
              <Comment.Text>
                    {content}
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>



          
        { this.props.currentUser === user.username
            ?
            <div>
              <Card.Content>
                  <div>
                    <Button 
                      basic
                      color='red'
                      floated='right'
                      onClick={this.handleDelete}
                      style={{margin: "10px 5px"}}
                    >
                      Delete
                    </Button>
                  </div>
              </Card.Content>
              <Card.Content>
                  <div>
                      <Button
                        basic
                        color='grey'
                        floated='right' 
                        disabled={open}
                        onClick={this.handleOpen}
                        style={{margin: "10px 5px"}}
                      >
                        Edit
                      </Button>

                      <Portal onClose={this.handleClose} open={open}>
                        <Segment
                          style={{
                            width: '40%',
                            height: '220px',
                            left: '30%',
                            position: 'fixed',
                            top: '30%',
                            zIndex: '1000'
                          }}
                        >
                          <Header>Edit Review</Header>
                          <Form>
                            <Form.Field
                                control={TextArea}
                                label="Please Update Your Review Here"
                                placeholder="Write your review here"
                                name="content"
                                onChange={this.handleChange}
                                value={this.state.content}
                            />
                          </Form>
                          <Button
                            color='blue'
                            id='submit'
                            floated='right'
                            content='Submit'
                            onClick={this.handleSubmit}
                            style={{margin: "10px 5px"}}
                          />
                          <Button
                            basic
                            color='grey'
                            content='Cancel'
                            floated='right'
                            onClick={this.handleClose}
                            style={{margin: "10px 5px"}}
                          />
                        </Segment>
                      </Portal>
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

let updateReview = (updatedReviewID) => {
  return {
    type: "UPDATE_REVIEW",
    payload: updatedReviewID
  }
}

let mapToDispatch = {deleteReview, updateReview}

export default connect(mapStateToProps, mapToDispatch)(Review)