import React, { Component } from 'react';
import Criteria from './Criteria.jsx';
import ResultsList from './ResultsList.jsx';


class Search extends Component {


  render() {
    return (
      <div>
        <div className="coastLine">
        	<h1>Search the database for recordings</h1>
          <Criteria />
          <h1>Search Results</h1>
        </div>
        <ResultsList loadSong="all" />
      </div>
    );
  }
}

export default Search;