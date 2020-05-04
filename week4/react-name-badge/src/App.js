import React from 'react';
import './App.css';
// import BadgeDisplay from './BadgeDisplay';
import Badge from './Badge';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        fName: "",
        lName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favFood: "",
        aboutMe: ""
    }
  }

  handleChange = (event) => {
    const {value} = event.target
    value === "" ? 
    document.querySelector("#submitButton").disabled = true : 
    document.querySelector("#submitButton").disabled = false
    }

  handleSubmit = (event) => {
    event.preventDefault()

    let form = document.querySelector(".form")

    this.setState({
      fName: form.fName.value,
      lName: form.lName.value,
      email: form.email.value,
      placeOfBirth: form.placeOfBirth.value,
      phone: form.phone.value,
      favFood: form.favFood.value,
      aboutMe: form.aboutMe.value
    });
    form.fName.value = ""
    form.lName.value = ""
    form.email.value = ""
    form.placeOfBirth.value = ""
    form.phone.value = ""
    form.favFood.value = ""
    form.aboutMe.value = ""
}

  render() {
    return (
      <div className="App">

        <form className="form" 
          onSubmit={this.handleSubmit}>

          <input name="fName" 
            placeholder="First Name" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <input name="lName" 
            placeholder="Last Name" 
            onChange={this.handleChange}/>

          <br />

          <input name="email" 
            placeholder="Email" 
            type="email"
            minLength="3"
            onChange={this.handleChange}
            required/>

          <input name="placeOfBirth" 
            placeholder="Place of Birth" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <br />

          <input name="phone" 
            placeholder="Phone" 
            type="number" 
            minLength="10"
            maxLength="10"
            onChange={this.handleChange}
            required/>

          <input name="favFood" 
            placeholder="Favorite Food" 
            minLength="3"
            onChange={this.handleChange}
            required/>

          <br />

          <textarea name="aboutMe" 
            placeholder="Tell us about yourself." 
            minLength="3"
            onChange={this.handleChange}
            required />

          <br />

          <button id="submitButton" disabled={true}>Submit</button>

        </form>

        <Badge fName={this.state.fName} lName={this.state.lName} email={this.state.email} placeOfBirth={this.state.placeOfBirth} phone={this.state.phone} favFood={this.state.favFood} aboutMe={this.state.aboutMe}/>
        {/* <BadgeDisplay badgeList={this.state.badgeList}/> */}

      </div>
    );  
  }
}

export default App;
