import React from "react";

class Contactform3 extends React.Component{
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
          return null
        }
        // The markup for the Step 1 UI
        return(
          <div className="form-group">
              <label htmlFor="firstname">First Name</label>
            <input
              className="form-control"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name"
              value={this.props.firstname} 
              onChange={this.props.handleChange} 
            />
            <label htmlFor="lastname">Last Name</label>
            <input
              className="form-control"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name"
              value={this.props.lastname}
              onChange={this.props.handleChange}
            />
            <label htmlFor="email">Email address</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </div>
        )
      }

}
export default Contactform3;