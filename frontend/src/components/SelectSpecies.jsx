import React, { Component } from 'react';
import Select from 'react-select';

const species = [
			{ value: 'Megaptera_novaeangliae', label: 'Humpback whale, Megaptera novaeangliae' },
			{ value: 'Balaenoptera_musculus', label: 'Blue whale, Balaenoptera musculus' },
			{ value: 'Balaenoptera_brydei', label: 'Bryde\'s whale, Balaenoptera brydei' },
			{ value: 'Balaenoptera_acutorostrata', label: 'Common minke whale, Balaenoptera acutorostrata' },
			{ value: 'Balaenoptera_edeni', label: 'Eden\'s whale, Balaenoptera edeni' },
			{ value: 'Balaenoptera_physalus', label: 'Fin whale, Balaenoptera physalus' },
			{ value: 'Balaenoptera_omurai', label: 'Omura\'s whale, Balaenoptera omurai' },
			{ value: 'Balaenoptera_borealis', label: 'Sei whale, Balaenoptera borealis' },
			{ value: 'Balaenoptera_bonaerensis', label: 'Antarctic minke whale, Balaenoptera bonaerensis' },
		]
const population = [
			{ value: 'North Pacific', label: 'North Pacific' },
			{ value: 'Atlantic', label: 'Atlantic' },
			{ value: 'Southern Ocean', label: 'Southern Ocean' },
			{ value: 'Indian Ocean', label: 'Indian Ocean' }
		]

class SelectSpecies extends Component {
	state = {
		speciesOption: '',
		populationOption: ''
	}
	handleSpecies = (selectedOption) => {
		this.setState({ speciesOption: selectedOption });
	}
	handlePopulation = (selectedOption) => {
		this.setState({ populationOption: selectedOption });
	}

	render() {

	return (
		<div className="selectSpecies">
			<label>Species
			<Select
				name="species"
				value={this.state.speciesOption}
				placeholder="Humpback whale, Megaptera novaeangliae"
				onChange={this.handleSpecies}
				options={species}
        	/></label>
        	<label>Population
        	<Select
				name="population"
				value={this.state.populationOption}
				onChange={this.handlePopulation}
				options={population}
        	/></label>
		</div>
	)
  }
}

export default SelectSpecies;