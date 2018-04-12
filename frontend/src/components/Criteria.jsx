import React, { Component } from 'react';
import SelectSpecies from './SelectSpecies.jsx';

 
class Criteria extends Component {
 
 render() {
  return (
    <form>
      <SelectSpecies callBackfromParent={this.returnSelection} />
      <label htmlFor="recordingDate" className="recordingDate">Date from
            <input 
              type="date"
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              id="recordingDate" /></label>
      <label htmlFor="recordingDate" className="recordingDate">Date to
            <input 
              type="date"
              required
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              id="recordingDate" /></label>
      <input type="submit" value="Search" />
    </form>
  );
}
 
}

export default Criteria;