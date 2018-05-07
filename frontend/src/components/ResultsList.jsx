import React, { Component } from 'react';

import Waveform from './Waveform'



class ResultsList extends Component {

	state = {
		songLength: []
	}

	static allSongs = [{
		id: 1,
		file: '/sample_assets/humpback1.mp3',
		species: 'Megaptera novaeangliae',
		commonName: 'Humpback Whale',
		date: '2018-21-08',
		user: 'Dan Vallentyne',
		population: 'Atlantic',
		communication: 'Song',
		location: '21.329294,-71.2072321',
		equipment: 'Aquarian Audio H1a Hydrophone',
		length: '2342',
		description: 'We made this recording while on vacation in Salt Cay, Turks and Caicos. I set up the hydrophone to record while we were on a dive and got about 50 minutes of recording. You can actually hear us surface around minute 52.'
	},
	{
		id: 2,
		file: '/sample_assets/humpback2.aac',
		species: 'Megaptera novaeangliae',
		commonName: 'Humpback Whale',
		date: '2017-14-06',
		user: 'Sparrow Sailfish',
		population: 'Pacific',
		communication: 'Song',
		location: '-32.264564, 63.432123',
		equipment: 'Aquarian Audio H1a Hydrophone',
		length: '34534',
		description: 'These whales were singing very close to our boat and we were able to get a great quality recording. We sat and listened to them for over 45 minutes! Our hydrophone was lowered to 3 meteres off of our tour boat and we recorded onto my iPhone'
	},
	{
		id: 3,
		file: '/sample_assets/stripeddolphin.wav',
		species: 'Stenella coeruleoalba',
		commonName: 'Striped Dolphin',
		date: '2017-21-08',
		user: 'bubbles',
		population: '',
		communication: 'Signal',
		location: '-12.345732, 12.235466',
		equipment: 'Aquarian Audio H1a Hydrophone',
		length: '53345',
		description: 'This recording of dolphins that came off the bow of our sailboat, the Mariposa dos. What a lucky time to be alive that we can witness these magnificant creatuers living alongside us. The recording quality is not great as we struggled to get a clean sound against the backdrop of the boat. The line was lowered to 5 meters off the bow'
	}];

	displaySong(song) {
		if(this.props.waveFormType==='short') {
			return(
				<li key={song.id} className="heroSong">
					<Waveform src={song.file} height={300} />
					<div className="coastLine">
						<div>
							<div className="species">{song.commonName}</div>
							<div className="species">{song.species}</div>
						</div>
						<div>
							<label>Uploaded by</label>
							<div className="equipment">{song.user}</div>
						</div>
						<a href="/search">More about this recording</a>
					</div>
				</li>
			)
		} else {
			return(
				<li key={song.id}>
					<Waveform src={song.file} height={128} />
					<div className="coastLine">
						<div className="title">
							<h3>
								<span className="commonName">{song.commonName}</span>
								<span className="species">{song.species}</span>
							</h3>
						</div>
						<div className="metaGrid">
							<div className="left">
								<div className="date"><label>date</label>{song.date}</div>
								<div className="communication"><label>communication</label>{song.communication}</div>
								<div className="population"><label>population</label>{song.population}</div>
								<div className="location"><label>location</label>{song.location}</div>
								<div className="song-length"><label>length</label>{song.length}</div>
								<div className="equipment"><label>equipment</label>{song.equipment}</div>
								<div className="equipment"><label>uploaded by</label>{song.user}</div>
								<div className="file"><a href="{song.file}">Download File</a></div>
							</div>
							<div className="description right"><label>description</label>{song.description}</div>
						</div>
					</div>
				</li>
			)
		}
	}
	
	render() {
		if(this.props.loadSong === 'random') {
			const song = ResultsList.allSongs[Math.floor(Math.random()*3)];
			return <ul className="songList">{this.displaySong(song)}</ul>
		} else if(this.props.loadSong === 'all') {
			return <ul className="songList">{ResultsList.allSongs.map(song => this.displaySong(song))}</ul>
		} else {
			return <div>no results</div>
		}
	}
}

export default ResultsList;