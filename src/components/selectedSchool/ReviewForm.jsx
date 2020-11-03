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
    this.props.addReview(res)
    this.props.addReviewToSpecificSchool(res, this.props.school.id)
  //NEED TO SEND THIS BACK UP IN ORDER TO REFRESH THE REVIEWS... BUT send this back to school reducer.
  })
}


  render(){

    let {content} = this.state

    return(
      <div>
         <h4>Reviews</h4>
            <Form>
              <Form.Field
                  control={TextArea}
                  label="Content"
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