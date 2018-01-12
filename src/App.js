import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons : [
      {name:"Sachdev", age:"26"},
      {name:"Sathwik", age:"23"},
      {name:"Neelam", age:"28"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button> Test </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobby: chess..!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
