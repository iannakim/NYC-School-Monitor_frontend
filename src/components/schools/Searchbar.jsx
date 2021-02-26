import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

class Searchbar extends React.Component{

  //callback function invoked with controlled form data.
    //sending back what user typed on the search bar
  handleInput = (evt) => {
      this.props.changeSearchTerm(evt.target.value)
  }

  render(){
    return(
        <div class="ui icon input">
            <input 
                type="text" 
                name="search" 
                value={this.props.searchTerm}
                onChange={this.handleInput}
                placeholder="Search for a school..."
            />
          <i aria-hidden="true" class="search circular inverted link icon"></i>
        </div>
    )
  }
}

export default Searchbar

