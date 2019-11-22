import React from 'react';
import './Main.css'


function Main(props) {
    const person = props.people.map((person, index) => {
        return <li key={index}>{person.name}</li>;
    });

  return (
    <main className='main'>
      <ul id='list'>{person}</ul>
    </main>
  );
}

export default Main;