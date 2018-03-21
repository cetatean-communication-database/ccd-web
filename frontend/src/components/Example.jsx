import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Example extends Component {
  render() {
  return (
    <div>
    <h2>Welcome to the test component!</h2>
    <p>
      <Link to="/contact">Click Here</Link> to go nowhere!
    </p>
    </div>
  )
  }
}