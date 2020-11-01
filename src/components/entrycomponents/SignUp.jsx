import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { Input, Form, Button } from 'semantic-ui-react'

class SignUp extends React.Component{

    state = {
        username: "",
        password: "",
        email: "",
        role: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    } 

    handleClick = (evt) => {
        evt.preventDefault()
        let {username, password, email, role} = this.state
        fetch("http://localhost:3000/signup",{
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email,
                role
            })
        })
        .then(response => response.json())
        .then(res => {
            // console.log(res)
            // debugger
            if (res.error) {
                console.error(res.error)
                alert(res.error)
              }
              else {
                localStorage.token = res.token
                this.props.createUser(res)
                this.props.history.push("/")
              }
        })
    }

    render(){

        let {username, password, email, role} = this.state

        return(
            <div>
                <h1>Sign Up</h1>
                <Form>
                    <Form.Field id="username"
                        control={Input}
                        label="Username"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Field id="password"
                        control={Input}
                        label="Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Field id="email"
                        control={Input}
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Field id="role"
                        control={Input}
                        label="Role"
                        placeholder="Role"
                        name="role"
                        value={role}
                        onChange={this.handleChange}
                        width={8}
                    />
                    <Form.Field
                        id='submit'
                        control={Button}
                        content='Sign Up'
                        onClick={this.handleClick}
                    />
                </Form>
                <p>
                    Have an Account?
                    <Link to="/login">Log In!</Link>
                </p>
            </div>
        )
    }
}

// ACTION CREATOR
let createUser = (newUser) => {
    return {
        type: "SET_USER_INFO",
        payload: newUser
    }
}

let mapDispatchToProps = {
    createUser: createUser
}

export default connect(null, mapDispatchToProps)(withRouter(SignUp))
