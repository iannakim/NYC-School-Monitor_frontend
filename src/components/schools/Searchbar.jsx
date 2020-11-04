import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Searchbar extends React.Component{

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
                placeholder="Search..."
            />
          <i aria-hidden="true" class="search circular inverted link icon"></i>
        </div>
    )
  }
}

export default Searchbar

