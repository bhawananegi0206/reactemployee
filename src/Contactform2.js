import React from "react";

class Contactform2 extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            skillsarr : ["HTML5","Javascript","SASS","Bootstrap","React"]
        }
    }
    render() {
        if (this.props.currentStep !== 2) { 
          return null
        }
        return(
          <div className="form-group">
            <label htmlFor="keyskills">Select your skills</label>
            <div id="toppings"> 
                {this.state.skillsarr.map((value) => {
                    return  <div class="checkbox">
                    <label><input type="checkbox" onChange={this.props.handleCheck} name={value} value={value} />{value}</label>
                    </div>
                })}

            </div>
          </div>
        )
      }

}
export default Contactform2;