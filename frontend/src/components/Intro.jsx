import React, { Component } from 'react';
import ResultsList from './ResultsList';

class Intro extends Component {

	render() {
		return (

			<div className="ocean intro">
				<ResultsList loadSong="random" waveFormType="short" />
				<div className="coastLine">
					<div className="bannerText">
						<h1>CETEACEAN COMMUNICATION DATABASE</h1>
						<h2>A public database for humpback whale song and other recordings of Cetacean communication.</h2>
						<a className="button" href="/upload">Upload</a>
					</div>
					<ul className="quicksummary cols">
						<li>
							<h2>About the Project</h2>
							<p>The Cetacean Communication Database is a citizen science inititive to learn more about whalesong and other forms of cetacean communication. Enthusiasts from all over the world can contribute recordings to the database for researchers to use.</p>
						</li>
						<li>
							<h2>How to Contribute</h2>
							<p>If you are in, or visiting, an area with singing whales you can make your own recordings and upload them to our database. Guidelines on equipment, process, and places where you can hear whale song are coming soon.</p>
						</li>
						<li>
							<h2>About Whalesong</h2>
							<p>Whalesong is beautiful and complex. We know that male whales sing only during their summer months and that the songs have structure similar to human songs but here is much we still have to learn about why and how whales sing.</p>
						</li>
					</ul>	
				</div>
			</div>
			
		)
	}
}


export default Intro
