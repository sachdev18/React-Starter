import React from 'react';

const person = (props) => {
    return (
    <div>

        <p onClick={props.click}>Hi im a {props.name}, I'm {props.age} years old component</p>
        <p>{props.children}</p>
        
   </div> 
    )
}

export default person;
