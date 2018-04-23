import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class NavBar extends Component {

  render() {
    return (

    	<div className="epipelagic">
    		<nav>
    			<a href="/about">About</a>
    			<a href="/upload">Upload</a>
    			<a href="/search">Search</a>
    		</nav>
    	</div>

      
    )
  }
}

export default NavBar
