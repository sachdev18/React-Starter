import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Sachdev", age: "26" },
      { name: "Sathwik", age: "23" },
      { name: "Neelam", age: "28" }
    ]
  }

  switchNameHandler = (newName, newAge) => {
    // console.log("this works!!");
    // 'MUTATING STATE, DONT DO' :: this.state.persons[1].name = "Sathwik";
    this.setState({
      persons: [
      { name: newName, age: newAge },
      { name: "Suman", age: "26" },
      { name: "Neelam", age: "30" }
    ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sachdev", age: "25" },
        { name: event.target.value, age: "26" },
        { name: "Neelam", age: "28" }
      ]
    })
  }

  render() {
    //INLINE STYLE..!!
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('newSyntax', 50)}> Change name </button>
        <Person name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "BINDED CODE IN PARA", 50)}
                change={this.nameChangeHandler}>
                Hobby: chess..!
                </Person>
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
