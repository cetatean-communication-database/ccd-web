import React, { Component } from 'react';


class ResultsList extends Component {

	static allSongs = [{
		id: 1,
		file: '/sample_assets/humpback1.mp3',
		species: 'Humpback Whale, Megaptera novaeangliae',
		date: '2018-21-08',
		population: 'Atlantic',
		communication: 'Song',
		location: '21.329294,-71.2072321',
		equipment: 'Aquarian Audio H1a Hydrophone',
		description: 'We made this recording while on vacation in Salt Cay, Turks and Caicos. I set up the hydrophone to record while we were on a dive and got about 50 minutes of recording. You can actually hear us surface around minute 52.'
	},
	{
		id: 2,
		file: '/sample_assets/humpback2.aac',
		species: 'Humpback Whale, Megaptera novaeangliae',
		date: '2017-14-06',
		population: 'Pacific',
		communication: 'Song',
		location: '-32.264564, 63.432123',
		equipment: 'Aquarian Audio H1a Hydrophone',
		description: 'These whales were singing very close to our boat and we were able to get a great quality recording. We sat and listened to them for over 45 minutes! Our hydrophone was lowered to 3 meteres off of our tour boat and we recorded onto my iPhone'
	},
	{
		id: 3,
		file: '/sample_assets/stripeddolphin.wav',
		species: 'Striped Dolphin, Stenella coeruleoalba',
		date: '2017-21-08',
		population: '',
		communication: 'Signal',
		location: '-12.345732, 12.235466',
		equipment: 'Aquarian Audio H1a Hydrophone',
		description: 'This recording of dolphins that came off the bow of our sailboat, the Mariposa dos. What a lucky time to be alive that we can witness these magnificant creatuers living alongside us. The recording quality is not great as we struggled to get a clean sound against the backdrop of the boat. The line was lowered to 5 meters off the bow'
	}];
	
	render() {
		return(
			<ul>
				{ResultsList.allSongs.map(song => (				
					<li key={song.id}>
						{song.species},
						{song.date},
						{song.population},
						{song.communication},
						{song.location},
						{song.equipment},
						{song.description}
					</li>
				))}
			</ul>
		)
	}

}

export default ResultsList;