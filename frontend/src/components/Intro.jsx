import React, { Component } from 'react';
import NavBar from './NavBar';
import ResultsList from './ResultsList';

class Intro extends Component {



	render() {
		return (

			<div className="ocean">
				<NavBar />
				<ResultsList />

				<h1>COMMUNICATION DATABASE</h1>
				<h2>A public database for humpback whale song and other recordings of Cetacean communication.</h2>
				<a href="/upload">Upload</a>
			</div>
			
		)
	}
}


export default Intro
