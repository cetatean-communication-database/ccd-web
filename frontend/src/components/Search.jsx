import React, { Component } from 'react';
import Criteria from './Criteria.jsx';
import ResultsList from './ResultsList.jsx';

interface SearchState {
  allSongs: Song[],
  filteredSongs: Song[],
  criteria: string;
}
class Search extends Component {


  render() {
    return (
      <div>
      	<h1>Search the database for recordings</h1>
        <Criteria />
        <h1>Search Results</h1>
        <ResultsList />
      </div>
    );
  }
}

export default Search;