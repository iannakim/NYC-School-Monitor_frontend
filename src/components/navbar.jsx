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
                        position: 'fixed',
                        height: "60px",
                        backgroundColor: '#273BE2',
                        color: "white",
                        fontFamily:'Helvetica Neue',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        paddingBottom: '10px'
                    }} inverted widths={5}>      
                        
                        <Menu.Item 
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/"><h3>NYC SCHOOL MONITOR</h3></NavLink>
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
                            <NavLink to="/saved"><Icon name="star outline"></Icon> Saved Schools</NavLink>
                        </Menu.Item>

                        <Menu.Item 
                            name='account'
                            active={activeItem === 'account'}
                            onClick={this.handleItemClick}
                        >
                            <NavLink to="/account"><Icon name="user circle"></Icon> Hello {this.props.currentUser}</NavLink>
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
                        position: 'fixed',
                        height: "60px",
                        backgroundColor: '#273BE2',
                        color: "white",
                        fontFamily:'Helvetica Neue',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        paddingBottom: '10px'
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

let mapStateToProps = (globalState) => {
    return {
        currentUser: globalState.infoAboutUser.username
    }
  }


let mapDispatchToProps = {
    handleLogOut: handleLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))

