import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = () => {
    return (
        <div className="home-container"
            style={{
                width: '100%',
                height: "100%",
                color: 'white',
                textAlign: 'center',
                backgroundImage: `url(https://get.pxhere.com/photo/atmosphere-vehicle-space-circle-outer-space-earth-illustration-planet-cartoon-screenshot-spacecraft-astronomical-object-atmosphere-of-earth-1405991.png)`,
                backgroundSize: "cover",
            }} >
            <center>
                <div style={{
                    width: "50%",
                    height: "400px",
                    background: "rgba(255, 255, 255, 1)",
                    // border: "10px solid black",
                    top: "100px",
                    left: "25%",
                    position: "absolute",
                    color: "black",
                    borderRadius: "20px"
                }}>
                    <br /><br />
                    <h1>Welcome to nyc school monitor home page!</h1>
                    <h3>NYC families can use MySchools to apply to public schools<br />
                    from 3-K to high school. Get started by creating an account.<br />
                    Then explore your children’s personalized school options and get<br />
                    guidance on the admissions process from start to finish.</h3>
                    <br /><br /><br /><br />
                    <NavLink to="/schools"><Button basic color='blue' content='Browse Schools' /></NavLink>
                </div>
            </center>
            
        </div>
    )
}

export default withRouter(Home)