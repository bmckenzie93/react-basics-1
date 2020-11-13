import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  state = {
    userNames: ['Brandon', 'Jasira', 'Akili']
  }

  textInputHandler = (e) => {
    const userInput = e.target.value;

    this.setState({
      userNames: [userInput, 'Jai', 'BamBam']
    })
  }

  render() {
    return (
      <div className='App'>
        {/* INPUT */}
        <UserInput 
        onChange={this.textInputHandler} 
        currentName={this.state.userNames[0]}/>

        {/* OUTPUT */}
        <UserOutput userName={this.state.userNames[0]}/>
        <UserOutput userName={this.state.userNames[1]}/>
        <UserOutput userName={this.state.userNames[2]}/>
      </div>
    )
  }
};

export default App;
