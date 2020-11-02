import React from 'react'
import {connect} from 'react-redux'


function SelectedSchoolPage(props) {
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
      extracurricular 
      } = props.foundSchool

  return(
    <div>
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
        <h3>School Overview</h3>
        <p>{overview}</p>
      </div>
        
      <div>
        <h3>Transportation</h3>
        <p>Subway: {subway} </p>
        <p>Bus: {bus} </p>
      </div>

      <div>
        <h3>Academics</h3>
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
  
    </div>
  )
}


let mapStateToProps = (globalState, ownProps) => {
  console.log(ownProps)
  // ownProps is the props of the ShowFox component
}

export default SelectedSchoolPage