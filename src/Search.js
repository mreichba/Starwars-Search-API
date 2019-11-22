import React from 'react';
import './Search.css';

class Search extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(e.target.searchName.value);
  }
   render() {
  
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>  
          <div className='search'>
            <label htmlFor='searchName' className='heading'>Search For A Starwars Character </label>
            <input type='text' id='searchName'></input>
          </div>
          <button className='button' type='submit' 
            >Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;