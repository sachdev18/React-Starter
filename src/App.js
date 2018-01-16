import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: "1233", name: "Sachdev", age: "26" },
      { id: "1244", name: "Sathwik", age: "23" },
      { id: "1255", name: "Neelam", age: "28" }
    ],
   showPersons : false
  }

  // switchNameHandler = (newName, newAge) => {
  //   // console.log("this works!!");
  //   // 'MUTATING STATE, DONT DO' :: this.state.persons[1].name = "Sathwik";
  //   this.setState({
  //     persons: [
  //     { name: newName, age: newAge },
  //     { name: "Suman", age: "26" },
  //     { name: "Neelam", age: "30" }
  //   ]
  //   })
  // }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sachdev", age: "25" },
        { name: event.target.value, age: "26" },
        { name: "Neelam", age: "28" }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  deletePersonHandler =(personIndex) => {
    const pers = [...this.state.persons];
    console.log("dperns", pers);
    pers.splice(personIndex, 1);
    this.setState({persons : pers})
    // When using setState(), always use the main state variable first eg.persons 
    // and that variable that holds the value to be changed second 
    // eg.this.setState({persons : pers})
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

    let persons = null

    if(this.state.showPersons) {
      persons = (
      <div>
        {console.log(this.state.persons[0])}
        {this.state.persons.map((newP, index) => {
         {console.log("newp", newP)}
         {console.log("index", index)}
         {console.log("name", newP.name)}
         return <Person 
                  name={newP.name} 
                  age={newP.age}
                  click={() => this.deletePersonHandler(index)}
                  key={newP.id} />
        })}
        
      {/* <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "BINDED CODE IN PARA", 50)}
              change={this.nameChangeHandler}>
              Hobby: chess..!
              </Person>
      <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} /> */}
      </div> );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler}> Toggle Persons </button>
        {persons}
      </div>
    );
  }
}

export default App;
