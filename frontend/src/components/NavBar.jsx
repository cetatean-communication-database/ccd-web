import React, { Component } from 'react';


class NavBar extends Component {

  render() {
    return (

    	<div className="epipelagic">
    		<nav>
                <a href="/">Home</a>
    			<a href="/about">About</a>
    			<a href="/upload">Upload</a>
    			<a href="/search">Search</a>
    		</nav>
    	</div>

      
    )
  }
}

export default NavBar
