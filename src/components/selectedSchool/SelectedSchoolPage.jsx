import React from 'react'
import { render } from 'react-dom'
import { Link, withRouter } from 'react-router-dom'
import Review from './Review'
import ReviewForm from './ReviewForm'


class SelectedSchoolPage extends React.Component {

goBack = () => {
  window.history.back();
}

    render(){

    let arrayOfReviews = this.props.foundSchool.reviews.map(review => {
          return <Review 
                    key={review.id}
                    review={review}
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
            <button onClick={this.goBack}>Go Back</button>
          </div>

            <div>
                <h2>{name}</h2>
            </div>
          
              <div>
                <p>School website: {website} </p>
                <p>Address: {address}, {city} {state}, {zipcode}</p>
                <p>Phone: {phone} </p>
                <p>Email: {email} </p>
                <p>Grades: {grades} </p>
                <p>Start Time: {start_time} </p>
                <p>End Time: {end_time}</p>
              </div>

              <div>
                <h4>Building Information</h4>
                <p>Shared space: {shared_space} </p>
                <p>Accessibility: {accessibility} </p>
              </div>

              <div>
                <h4>School Overview</h4>
                <p>{overview}</p>
              </div>
                
              <div>
                <h4>Transportation</h4>
                <p>Subway: {subway} </p>
                <p>Bus: {bus} </p>
              </div>

              <div>
                <h4>Academics</h4>
                <p>Total No. of Students: {total_students} </p>
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