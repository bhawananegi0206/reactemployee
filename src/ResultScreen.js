import React from "react";

class ResultScreen extends React.Component {
    render() {
      if (this.props.currentStep !== 4) { 
        return null
      }

      return(
       <div class="successdetails">
        <b>First Name:</b> <div class="details">{this.props.firstname}</div>
        <b>Last Name:</b> <div class="details">{this.props.lastname}</div>
        <b>Email:</b> <div class="details">{this.props.email}</div>
        <b>City:</b> <div class="details">{this.props.city}</div>
        <b>Skills:</b> <div class="details">
        <ul>
        {this.props.skills.map((value, index) => {
        return <li key={index}>{value}</li>
       })}
        </ul>

        </div>
       </div>
      )
    }
  }
  export default ResultScreen;