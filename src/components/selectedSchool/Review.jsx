import React from 'react'
import Moment from 'react-moment';
import { Card, Button } from 'semantic-ui-react'

class Review extends React.Component{
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
        
        <Card.Content>
            <div>
                <Button floated='right'>
                  Edit
                </Button>
            </div>
        </Card.Content>

       
        <Card.Content>
            <div>
                <Button floated='right'>
                  Delete
                </Button>
            </div>
        </Card.Content>
    </Card>
    )
  }
}

export default Review