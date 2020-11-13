import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { Input, Form, Button } from 'semantic-ui-react'

class LogIn extends React.Component{

state = {
    username: "",
    password: "",
    error_message: ""
}

handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    })
} 


handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }) 
    })
    .then(res => res.json())
    .then(resp => {
        console.log("user", resp);
        if(resp.error){
            this.setState({
                error_message: resp.error
            })
        } else {
            this.props.setUserInfo(resp)
            localStorage.token = resp.token
            this.props.history.push("/")

        }
    })


}

render(){

    let {username, password} = this.state

    return(

        <div className="home-container"
            style={{
                width: '100%',
                height: "100%",
                color: 'white',
                textAlign: 'center',
                backgroundImage: `url(https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`,
                backgroundSize: "cover"
            }} >
            <center>
                <div style={{
                    width: "30%",
                    height: "400px",
                    background: "rgba(255, 255, 255, 1)",
                    // border: "10px solid black",
                    top: "100px",
                    left: "36%",
                    position: "absolute",
                    color: "black",
                    borderRadius: "20px",
                    boxShadow: "4px 3px 10px 1px #969696"
                }}>


                    <div>
                        <br />
                            <h1>Log In</h1>
                            <p>{this.state.error_message}</p>
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
                                <Form.Field
                                    id='submit'
                                    control={Button}
                                    content='Sign Up'
                                    onClick={this.handleSubmit}
                                />
                            </Form>
                            <p>
                                Don't Have an Account?
                                <Link to="/signup"> Sign Up!</Link>
                            </p>
                    </div>

                </div>
            </center>
        </div>

    )
}

}



// ACTION CREATOR
let setUserInfo = (userInfo) => {
  return {
      type: "SET_USER_INFO",
      payload: userInfo
  }
}

let mapDispatch = {
  setUserInfo: setUserInfo
}

export default connect(null, mapDispatch)(withRouter(LogIn))
