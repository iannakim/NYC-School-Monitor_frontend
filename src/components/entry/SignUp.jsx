import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { Input, Form, Button, Radio } from 'semantic-ui-react'

class SignUp extends React.Component{

    state = {
        username: "",
        password: "",
        email: "",
        role: ""
    }

    handleChange = (evt) => {
        console.log(evt.target.value)
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
                    label="Create a Username"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    width={8}
                />
                <Form.Field id="password"
                    control={Input}
                    label="Create a Password (at least 5 characters)"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    width={8}
                />
                <Form.Field id="email"
                    control={Input}
                    label="Valid Email Address"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    width={8}
                />
                {/* <Form.Field id="role"
                    control={Input}
                    label="Role"
                    placeholder="Role"
                    name="role"
                    value={role}
                    onChange={this.handleChange}
                    width={8}
                /> */}

                <Form.Field>
                    Your Role: <b>{role}</b>
                    </Form.Field>
                <Form.Field>
                        <Radio
                            label="Parent"
                            name="role"
                            value="Parent"
                            checked={role === "Parent"}
                            onChange={this.handleChange}
                        />
                    </Form.Field>

                <Form.Field>
                        <Radio
                            label="Current Student"
                            name="role"
                            value="Current Student"
                            checked={role === "Current Student"}
                            onChange={this.handleChange}
                        />
                </Form.Field>

                <Form.Field>
                        <Radio
                            label="Teacher"
                            name="role"
                            value="Teacher"
                            checked={role === "Teacher"}
                            onChange={this.handleChange}
                        />
                </Form.Field>

                <Form.Field>
                        <Radio
                            label="Alumni"
                            name="role"
                            value="Alumni"
                            checked={role === "Alumni"}
                            onChange={this.handleChange}
                        />
                </Form.Field>

                <Form.Field
                    id='submit'
                    control={Button}
                    content='Sign Up'
                    onClick={this.handleClick}
                />
            </Form>
                <p>
                    Have an Account?
                    <Link to="/login"> Log In!</Link>
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
