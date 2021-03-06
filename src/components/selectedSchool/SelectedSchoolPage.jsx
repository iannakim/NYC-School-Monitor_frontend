import React from 'react'
import {connect} from 'react-redux'
import Review from './Review'
import ReviewForm from './ReviewForm'
import { Icon, Grid, Button } from 'semantic-ui-react'
import school from '../../images/school_icon.png';
import ReactTooltip from 'react-tooltip';


class SelectedSchoolPage extends React.Component {

goBack = () => {
  window.history.back();
}

handleClick = () => {
  {
    localStorage.token
  ?

  fetch("http://localhost:3000/save",{
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "Authorization": this.props.token
      }, 
      body: JSON.stringify({
          school_id: this.props.foundSchool.id
      })
  })
  .then(response => response.json())
  .then(res => {
    console.log(res)
  })
  :
  alert("please log in first!")
  }
}

    render() {
      console.log("this is the found school in selectedschoolpage", this.props.foundSchool);
      let arrayOfReviews = this.props.foundSchool.reviews.map(review => {
        return <Review 
                    key={review.id}
                    review={review}
                    school={this.props.foundSchool}
                />
      })

      let {
        name, 
        address, 
        city, 
        state, 
        zipcode, 
        grades, 
        overview, 
        start_time, 
        end_time, 
        phone, 
        email, 
        website, 
        subway, 
        bus, 
        shared_space, 
        accessibility, 
        total_students, 
        graduation_rate, 
        attendance_rate, 
        langclasses, 
        ellprograms, 
        apcourses, 
        extracurricular, 
        } = this.props.foundSchool

      return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}
              style={{
                margin: '10px 20px',
              }}
            >
              <div style={{
                marginTop: "20px", 
                background: "white",
                opacity: '85%', 
                padding: "20px", 
                borderRadius: '25px'
              }}>
                
                <div class="section">
                  <h2><img src={school}/> {name}</h2>
                  <Grid>
                    <Grid.Row style={{paddingBottom: "0px"}}>
                      <Grid.Column width={8}>
                        <p><Icon name="graduation cap"></Icon> {grades} </p>
                        <p><Icon name="group"></Icon> {total_students} students</p>
                        <p><Icon name="clock"></Icon> {start_time} - {end_time}</p>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <p><Icon name="world"></Icon> <a href={website} target="_blank"> {website}</a> </p>
                        <p><Icon name="mail"></Icon> <a href={email} target="_blank">{email}</a> </p>
                        <p><Icon name="phone"></Icon> {phone} </p>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: "0px"}}>
                      <Grid.Column>
                        <p><Icon name="map marker alternate"></Icon> {address}, {city}, {state}, {zipcode}</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>

                <div class="section">
                  <h3>School Overview</h3>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={12}>
                          <p> {overview} </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
                  
                <div class="section">
                  <h3>Performance & Opportunities</h3>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={12}>
                        <p><Icon name="student"></Icon> <b>Graduation Rate </b>(as of 2019): {parseFloat(graduation_rate) * 100}% </p>
                        <p><Icon name="file text outline"></Icon> <b>Attendance Rate </b>(as of 2019): {parseFloat(attendance_rate) * 100}% </p>
                        <p><Icon name="language"></Icon> <b>ELL Program(s)</b>: {ellprograms} </p>
                        <p><Icon name="talk"></Icon> <b>Foreign Language Subjects</b>: {langclasses} </p>
                        <p><Icon name="flask"></Icon> <b>Advanced Placement Courses</b>: {apcourses} </p>
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>

                <div class="section">
                  <h3>Extracurricular Activities</h3>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={12}>
                         <p> {extracurricular} </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>

                <div class="section">
                  <h3>Building Information</h3>
                  <p><Icon name="building" data-tip="Shared Space Schools are schools that utilize the same building as 1 or more other schools"></Icon> <b>Shared space</b>: {shared_space} </p>
                  <p><Icon name="accessible" data-tip="Accessible Schools are schools with fully or partially accessible buildings to support students with mobility impairments."></Icon> {accessibility} </p>
                  <ReactTooltip />
                </div>

                <div class="section">
                  <h3>Transportation</h3>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={5}>
                      <p><Icon name="bus"></Icon> Bus:<br />{bus}</p>
                      </Grid.Column>
                      <Grid.Column width={5}>
                      <p><Icon name="subway"></Icon> Subway:<br />{subway}</p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>

                <hr />

                <div class="section">
                  <ReviewForm 
                    school={this.props.foundSchool}
                    addReviewToSpecificSchool={this.props.addReviewToSpecificSchool}/>
                  <div style={{marginTop: "80px"}}>
                    <ul>
                      { arrayOfReviews } 
                    </ul>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={3}
                style={{
                  margin: '80px 20px'
                }}
              >
              <div>
                <Button
                  onClick={this.goBack}
                  style={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: '#273BE2',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: "5px",
                  }}>
                      <Icon name="arrow alternate circle left outline" /> Back
                </Button>
              </div>
              <div style={{marginTop: "20px"}}>
                <Button
                  onClick={this.handleClick}
                  style={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: '#FFCC33',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: "5px",
                  }}>
                      <Icon name="star outline" /> Save
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  } 
} 

let mapStateToProps = (globalState) => {
  return {
      token: globalState.infoAboutUser.token,
  }
}


//NEED TO DISPATCH [create saved] when user clicks on the 'SAVE' button

export default connect(mapStateToProps, null)(SelectedSchoolPage)