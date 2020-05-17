import React from 'react';
import './App.css';
import NamesList from './NamesList';

class App extends React.Component {
  state = {
    userName: "",
    namesList: []
  }
  namelist ={};
  handleOnSubmit = (event) =>{
    event.preventDefault() // prevents default posting
    
    this.setState({
      namesList: this.state.namesList.concat(this.state.userName),
      userName:event.target.value  
    })
  };
  removeItem=(arr, value)=> { 
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
  handleOnNameListClickHandler = (itemName) =>{
    debugger
    alert(`Some one clicked on ${itemName}. I am going to remove myself `);
    const [currentList] = [this.state.namesList];
    const remainingItems = this.removeItem(currentList, itemName)
   
    this.setState({
      namesList: remainingItems,
      userName:itemName
    })

    
  };
  render() {
     const itemNames  = this.state.namesList.map(name =>
        <NamesList key={name} itemName = {name} onItemClick={this.handleOnNameListClickHandler}></NamesList>
      );
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
        <div>
          {itemNames}
        </div>
          
      </div>
    )
  }
}

export default App;
