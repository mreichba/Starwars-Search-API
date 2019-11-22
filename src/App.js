import React from 'react';
import Main from './Main'
import Search from './Search'

class App extends React.Component {
  state = {
    characters: []
  };
  
  apiCall = (character)=> {
    fetch(`https://swapi.co/api/people/?search=${character}`)
    .then((res) => {
        if (!res.ok)
            return res.json().then(e => Promise.reject(e));
        return res.json();
    })
    .then((data) => {
        this.setState({characters: data.results});
    })
    .catch(error => {
        console.error({error});
    });
}

handleSearchSubmit = (character) => {
  this.apiCall(character)
  
}

  render(){
    const people = this.state.characters;
    // const person = people.map(person => person.name)
    console.log(people);
    return (
      <div>  
        <Search 
          search={this.handleSearchSubmit}
        />
        <Main people={people} />
      </div>
    );
  }
}

export default App;