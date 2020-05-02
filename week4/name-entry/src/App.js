import React from 'react';
import NamesList from './NamesList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      namesList: []
    }
  }

  handleOnSubmit = (event) =>{
    debugger
    event.preventDefault() // prevents default posting
    
    this.setState({
      namesList: this.state.namesList.concat(this.state.name),
      name:event.target.value  
    })
    document.getElementById("name").value = ""

  }

  // addToList = (name) => {
  //   this.setState(prevState => {
  //     let newList = prevState.namesList.push(name)
  //     return newList
  //   })
  // }

  nameEntry = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleOnSubmit}>
          <input 
            name="name" id="name" 
            type="text" 
            placeholder="type a name to add to the list" 
            autocomplete="off" 
            onChange={this.nameEntry} 
            required
          />
          <button onClick={this.handleOnSubmit}>Add To List</button>
        </form>
        <h1>{this.state.name}</h1>
        <NamesList namesList = {this.state.namesList}></NamesList>
      </div>
    )
  }
}
  



export default App;
