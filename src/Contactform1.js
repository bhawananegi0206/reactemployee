import React from "react";

class Contactform1 extends React.Component {
    render() {
        
      if (this.props.currentStep !== 1) { 
        return null
      }
      

      return(
        <div className="form-group">
          <label htmlFor="city">Select City</label>
          <select name="city" class="form-control" value={this.props.city} onChange={this.props.handleChange}>
                <option value="berlin">Berlin</option>
                <option value="wolfsberg">Wolfsberg</option>
                <option value="frankfurt">Frankurt</option>
                </select>
        </div>
      )
    }
  }
  export default Contactform1;