import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import scope from './../images/scope.png';
import yellowbus from './../images/yellowbus.png';
import math from './../images/math.png';
import review from './../images/review.png';
import browse from './../images/browse.png';

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
                position: 'fixed'
            }} >
            <center>
                <div style={{
                    width: "650px",
                    height: "720px",
                    background: "rgba(255, 255, 255, 1)",
                    border: "10px dashed #F77F00",
                    top: "100px",
                    left: "5%",
                    position: "absolute",
                    color: "black",
                    borderRadius: "20px"
                }}>
                    <br />
                    <h1>Welcome to NYC School Monitor</h1>
                    <img src={browse} />  <img src={review} /><br/> 
                    <h3>NYC families can now use NYC School Monitor to browse the city's<br /> 
                    high school directory and read detailed information on each school. <br/>
                    Explore different school options and save them to your own list for<br/>
                    future reference<br/>
                    Also, read and write authentic reviews on each school from <br />
                    teachers, current Students, parents, and alumni students! <br/><br/>
                     
                    Get started by creating an account!<br /></h3>
                    <br />
                        <NavLink to="/schools">
                            <Button basic color='blue' content='Browse Schools!' />
                        </NavLink>
                        <br />
                     <img src={yellowbus} /> 
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