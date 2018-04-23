// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'

export default class Waveform extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			playing: false
		}
	}
	componentDidMount() {
		this.$el = ReactDOM.findDOMNode(this)
		this.$waveform = this.$el.querySelector('.wave')
		this.wavesurfer = WaveSurfer.create({
			container: this.$waveform,
			waveColor: 'violet',
			progressColor: 'purple'
		})
		this.wavesurfer.load(this.props.src)
		this.wavesurfer.on('ready', () => {
		});
	}
	playPause = () => {
		if(this.state.playing===false) {
			this.wavesurfer.play();
			this.setState({playing: true});
		} else {
			this.wavesurfer.pause();
			this.setState({playing: false});
		}
		console.log(this.state.playing)
	}
	componentWillUnmount() {

	}
	render() {
		return (
			<div className='waveform'>
				<button className="playwaveform" onClick={this.playPause}>
					{this.state.playing ? 'pause' : 'play'}
				</button>
				<div className='wave'></div>
			</div>
		)
	}
}

Waveform.defaultProps = {
	src: ""
}