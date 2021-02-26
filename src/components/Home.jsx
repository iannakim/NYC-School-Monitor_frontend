import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import scope from './../images/scope.png';
import yellowbus from './../images/yellowbus.png';
import math from './../images/math.png';
import browse from './../images/browse.png';

const Home = () => {
    return (

        //use module css to specify the css on this page. in style is very messy.
        <div className="home-container"
            style={{
                width: '100vw',
                height: "100vw",
                color: 'white',
                textAlign: 'center',
                backgroundImage: `url(https://get.pxhere.com/photo/atmosphere-vehicle-space-circle-outer-space-earth-illustration-planet-cartoon-screenshot-spacecraft-astronomical-object-atmosphere-of-earth-1405991.png)`,
                backgroundSize: "cover",
                position: 'absolute'
            }} >
            <center>
                <div style={{
                    width: "50%",
                    maxWidth: "700px",
                    contain: "content",
                    padding: "20px",
                    background: "rgba(255, 255, 255, 1)",
                    border: "8px dashed #F77F00",
                    boxShadow: "8px 8px 5px 1px rgba(0, 0, 0, .5)",
                    top: "10%",
                    left: "5%",
                    position: "absolute",
                    color: "black",
                    borderRadius: "20px"
                }}>
                    <div className="icons">
                    <img style={{
                    width: "15%"}} src={browse} />
                    <img style={{
                    width: "15%"}} src={yellowbus} />
                    </div>
                    <h1>Hi there!</h1>
                    <h3>Welcome to NYC School Monitor. One stop for accessing 400+ New York City high schools with a click of a button.</h3>
                    <p>NYC School Monitor uses NYC Open Data to access information on all current high schools around the five boroughs. Parents and Students can use the directory to browse schools in their neighborhoods as well as explore all academic and non-academic programs provided by each school.</p>
                        
                    <p>For parents wishing to compare different school options, use the 'Save' feature to store information separately and access them at any time.Read reviews shared by other parents, teachers, current students as well as alumni to see if this is the right school for your child.</p>
                     
                    <p>Get started by creating an account!</p>
                    <br />
                    <div>
                    <NavLink to="/schools">
                        <Button basic color='blue' content='Browse Schools!' />
                    </NavLink>
                    </div>
                </div>
            </center>
                <div style={{
                    top: "400px",
                    left: "70%",
                    position: "absolute",
                }}>
                    <img src={scope} />
                </div>
                <div>
                    <img src={math} /> 
                </div>
                     
            
        </div>
    )
}

export default withRouter(Home)