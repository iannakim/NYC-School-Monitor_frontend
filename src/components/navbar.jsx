import React from 'react'
import {connect} from 'react-redux'
import {withRouter, NavLink} from 'react-router-dom'

class Navbar extends React.Component {

    handleClick = (evt) => {
        // debugger
        localStorage.clear()
        // console.log(handleLogOut())
        this.props.handleLogOut()
    }
    render(){
        return (
            <div>
                {
                    localStorage.token
                    ?
                    <ul className="nav">
                        <li>
                            <p>NYC SCHOOL MONITOR</p>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/main">Search Schools</NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved">Saved List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">Account</NavLink>
                        </li>
                        <li onClick={this.handleClick}>
                            <NavLink to="/">Log Out</NavLink>
                        </li>
                    </ul>
                    :
                    <ul className="nav">
                        <li>
                          <p>NYC SCHOOL MONITOR</p>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
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