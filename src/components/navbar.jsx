import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'


class Navbar extends React.Component {
    state = {}


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    handleClick = (evt) => {
        // debugger
        localStorage.clear()
        // console.log(handleLogOut())
        this.props.handleLogOut()
    }
    render() {
        const { activeItem } = this.state

        return (
            
            <div>
                {
                    localStorage.token
                    ?
                   
                   <Menu style={{
                    height: "70px",
                    backgroundColor: '#1C39BB',
                    color: "white",
                    fontFamily:'Helvetica Neue',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                  }} inverted widths={5}>      
                        
                        <Menu.Item 
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/">NYC SCHOOL MONITOR</NavLink>
                        </Menu.Item>
                
                        <Menu.Item 
                            name='schools'
                            active={activeItem === 'schools'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/schools"><Icon name="search plus"></Icon> School Directory</NavLink>
                        </Menu.Item>
                
                        <Menu.Item 
                            name='savedList'
                            active={activeItem === 'savedList'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/saved"><Icon name="th list"></Icon> Favorites</NavLink>
                        </Menu.Item>

                        <Menu.Item 
                            name='account'
                            active={activeItem === 'account'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/account"><Icon name="user circle"></Icon> My Account</NavLink>
                        </Menu.Item>

                        <Menu.Item 
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleClick}
                        >
                            <NavLink to="/"><Icon name="users"></Icon> Log Out</NavLink>
                        </Menu.Item>
                    </Menu>
                    :
                    <Menu style={{
                    height: "70px",
                    backgroundColor: '#1C39BB',
                    color: "white",
                    fontFamily:'Helvetica Neue',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                      }} inverted widths={5}>
                    <Menu.Item 
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/">NYC SCHOOL MONITOR</NavLink>
                    </Menu.Item>
            
                    <Menu.Item 
                        name='schools'
                        active={activeItem === 'schools'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/schools"><Icon name="search plus"></Icon> School Directory</NavLink>
                    </Menu.Item>

                    <Menu.Item 
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/login"><Icon name="sign-in"></Icon> Log In</NavLink>
                    </Menu.Item>

                    <Menu.Item 
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleClick}
                    >
                        <NavLink to="/signup"><Icon name="signup"></Icon> Sign Up</NavLink>
                    </Menu.Item>
                </Menu>
                }
            </div>
        )
    }
}

let handleLogOut = () => {
    return {
        type: "LOG_OUT_USER"
    }
}

let mapDispatchToProps = {
    handleLogOut: handleLogOut
}

export default connect(null, mapDispatchToProps)(withRouter(Navbar))