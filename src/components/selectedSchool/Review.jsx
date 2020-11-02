import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class Review extends React.Component{
  render(){

    let {user, content, created_at} = this.props.review

    return( 
    <Card>
      <Card.Content>
          <Card.Header><h5>{content}</h5></Card.Header>
          <Card.Description>
              Comment by: {user.username} On: {created_at}
          </Card.Description>
      </Card.Content>
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