import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'

class ReviewForm extends React.Component{

  state = {
    content: "",
  }

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
} 


handleSubmit = (evt) => {
  evt.preventDefault()

  fetch("http://localhost:3000/review",{
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "Authorization": this.props.token
      }, 
      body: JSON.stringify({
          content: this.state.content,
          school_id: this.props.school.id
      })
  })
  .then(response => response.json())
  .then(res => {
    console.log(res)
    let reviewWithId = {review: res, school_id: this.props.school.id}
    this.props.addReview(reviewWithId)

  //NEED TO SEND THIS BACK UP TO SCHOOL REDUCER
  })
  this.setState({
    content: ""
})
}


  render(){

    let {content} = this.state

    return(
      <div>
         <h2>School Reviews</h2>
            <Form>
              <Form.Field
                  control={TextArea}
                  label="Please Write Your Review Here"
                  placeholder="write your review here"
                  name="content"
                  value={content}
                  onChange={this.handleChange}
                  width={8}
              />
              <Form.Field
                  id='submit'
                  control={Button}
                  content='Submit'
                  onClick={this.handleSubmit}
              />
            </Form>
      </div>
    )
  }
}

let mapStateToProps = (globalState) => {
  return {
      token: globalState.infoAboutUser.token,
  }
}


let addReview = (newReview) => {
  return {
      type: "ADD_REVIEW",
      payload: newReview
  }
}

let mapToDispatch = {addReview}

export default connect(mapStateToProps, mapToDispatch)(ReviewForm)