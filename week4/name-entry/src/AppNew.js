import React from 'react';
import './App.css';
import NamesList from './NamesList';

class App extends React.Component {
  state = {
    userName: "",
    namesList: []
  }

  handleOnSubmit = (event) =>{
    debugger
    event.preventDefault() // prevents default posting
    
    this.setState({
      namesList: this.state.namesList.concat(this.state.userName),
      userName:event.target.value  
    })
  };
  
  render() {
    return (
      <div className="App">
       <form onSubmit={this.handleOnSubmit}>
          <input 
             type="text"
             value={this.state.userName}
             onChange={event=> this.setState({ userName: event.target.value})}
       
             placeholder="Input Name"
             required
          />
          <button onClick={this.handleOnSubmit}>Submit</button>
        </form>
        <NamesList namesList = {this.state.namesList}></NamesList>
      </div>
    )
  }
}

export default App;
