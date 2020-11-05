import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Review from './Review'
import ReviewForm from './ReviewForm'
import { Icon, Grid } from 'semantic-ui-react'


class SelectedSchoolPage extends React.Component {

goBack = () => {
  window.history.back();
}

    render(){

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

      return(
        <div>

          <div>
            <button onClick={this.goBack}>Back</button>
          </div>

            <div className="ui celled grid">
                  <div className="row">
                      <div className="ten wide column">
                          <h2>{name}</h2>
                      </div>
                  </div>
            
          
              <div>
                <p><Icon name="graduation cap"></Icon> {grades}th grade </p>
                <p><Icon name="world"></Icon> <a href={website} target="_blank"> {website}</a> </p>
                <p><Icon name="map marker alternate"></Icon> {address}, {city} {state}, {zipcode}</p>
                <p><Icon name="phone"></Icon> {phone} </p>
                <p><Icon name="mail"></Icon> <a href={email} target="_blank">{email}</a> </p>
                
                <p><Icon name="clock"></Icon> {start_time} - {end_time}</p>
              </div>

              <div>
                <h3>Building Information</h3>
                <p>Shared space: {shared_space} </p>
                <p>Accessibility: {accessibility} </p>
              </div>

              <div>
                <h4>School Overview</h4>
                <p>{overview}</p>
              </div>
                
              <div>
                <h4>Transportation</h4>
                <p><Icon name="subway"></Icon> Subway: {subway} </p>
                <p><Icon name="bus"></Icon> Bus: {bus} </p>
              </div>

              <div>
                <h4>Academics</h4>
                <p><Icon name="group"></Icon> {total_students} students</p>
                <p>Graduation Rate (as of 2019): {parseFloat(graduation_rate) * 100}% </p>
                <p>Attendance Rate (as of 2019): {parseFloat(attendance_rate) * 100}% </p>
                <p>ELL Program(s): {ellprograms} </p>
                <p>Foreign Language Subjects: {langclasses} </p>
                <p>Advanced Placement Classes: {apcourses} </p>
              </div>

              <div>
                <h4>Extracurricular Activities and Clubs</h4>
                <p>{extracurricular} </p>
              </div>
          
          
          </div>

              <div>
                <div>
                  <ReviewForm 
                    school={this.props.foundSchool}
                    addReviewToSpecificSchool={this.props.addReviewToSpecificSchool}/>
                  <ul>
                    { arrayOfReviews } 
                  </ul>
                </div>
            </div>


        </div>
      )
  } 
} 



export default SelectedSchoolPage