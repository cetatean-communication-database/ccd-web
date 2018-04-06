import React, { Component } from 'react';
import FileUploadProgress from 'react-fileupload-progress';
import 'react-select/dist/react-select.css';
import SimpleMap from "./SimpleMap"
import SelectSpecies from './SelectSpecies.jsx';
	
class Upload extends Component {

	formGetter(){
		return new FormData(document.getElementById('fileUpload'));
	}

	customFormRenderer(onSubmit){
		return (
		  <form id='fileUpload'>
		    <div><label htmlFor="inputFile">Choose File</label><input type="file" name='file' id="inputFile" /></div>
		    <div className="buttonWrapper"><button type="button" onClick={onSubmit}>Upload</button></div>
		  </form>
		);
	}

	render() {

		return (
			<div>
				<h1>Add a recording to the Cetacean Communication Database</h1>
				<FileUploadProgress key='ex1' url='http://localhost:3000/api/upload'
					onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
					onLoad={ (e, request) => {console.log('load', e, request);}}
					onError={ (e, request) => {console.log('error', e, request);}}
					onAbort={ (e, request) => {console.log('abort', e, request);}}
					formGetter={this.formGetter.bind(this)}
		      		formRenderer={this.customFormRenderer.bind(this)}
		        />
				<SelectSpecies />
		    	<SimpleMap/>
		    	<div className="dateCommEquip">
			    	<label htmlFor="recordingDate" className="recordingDate">Date of Recording
			    	<input 
			    		type="date"
			    		required
			    		pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
			    		id="recordingDate" /></label>
			    	<label htmlFor="communicationType" className="communicationType">Communication Type <em>(Song, Vocalizations)</em>
			    	<input
			    		defaultValue="Song" 
			    		id="communicationType" /></label>
			    	<label htmlFor="equipmentUsed" className="equipmentUsed">Equipment Used
		    		<input
			    		type="text"
			    		placeholder="Model of Hydrophone, recording device..."
			    		id="equipmentUsed" /></label>
			    </div>
		    	<label htmlFor="description" className="description">Description of Recording
		    	<textarea className="Description" id="description" /></label>
		    	<button type="button">Add recording to Database</button>

			</div>
		)
	}
}

export default Upload;