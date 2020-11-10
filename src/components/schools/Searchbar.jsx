import React from 'react';
import { Search, Grid } from 'semantic-ui-react';

class Searchbar extends React.Component{

  handleInput = (evt) => {
      this.props.changeSearchTerm(evt.target.value)
  }

  render(){
    return(
      <Grid>
      <Grid.Column width={8}>
            <Search
                type="text" 
                name="search" 
                value={this.props.searchTerm}
                onChange={this.handleInput}
                placeholder="Search for a school..."
            />
          </Grid.Column>
      </Grid>
    )
  }
}

export default Searchbar

