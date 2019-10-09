import React from 'react';
import Contactform1 from "./Contactform1";
import Contactform2 from "./Contactform2";
import Contactform3 from "./Contactform3";
import ResultScreen from "./ResultScreen";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      email: '',
      firstname: '',
      lastname: '', 
      city :'berlin',
      skills:[]
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.nextstep = this.nextstep.bind(this);

  }

  handleOnChange = (event) =>{
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })    
  }
  
  handleOnChecked = (event) =>{
    let skillsdetails = this.state.skills;
    if(event.target.checked){
    skillsdetails.push(event.target.name);
    }
    else{
      skillsdetails = skillsdetails.filter(x => x !== event.target.name);
    }
    
    this.setState({
      "skills": skillsdetails
    })    
  }


  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      currentStep: 4
    });
  }

  nextstep= () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2? 3: currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }
  

  render(){
    
  return (
    <div class="maincontainer">
    <h1>Employee Details Form</h1>
    <div class="steps">Step {this.state.currentStep} </div> 
      
    <form onSubmit={this.handleOnSubmit}>
    
      <Contactform1 
        currentStep={this.state.currentStep} 
        handleChange={this.handleOnChange}
        city={this.state.city}
      />
      <Contactform2
        currentStep={this.state.currentStep} 
        handleCheck={this.handleOnChecked}
        country={this.state.country}
        
      />
      <Contactform3 
        currentStep={this.state.currentStep} 
        handleChange={this.handleOnChange}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
      />       
    <ResultScreen  {...this.state}/>
    </form>
    
    
    {this.state.currentStep <=2  &&
    <div class="btncontainer">
    <button 
        className="btn btn-primary " 
        type="button" onClick={this.nextstep}>
         Next
      </button> </div>}

      {this.state.currentStep === 3  &&
      <div class="btncontainer"><button class="btn btn-primary onsubmit" type="submit" onClick={this.handleOnSubmit}>Submit</button> </div>}
      }
      
   
     </div> 
  );
}
}

export default App;
