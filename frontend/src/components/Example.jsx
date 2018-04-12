import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Waveform from './Waveform'

import {example} from "../actions";

class Example extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      text: "",
      updateThingId: null,
    };
  }

  resetForm = () => {
    this.setState({text: "", updateThingId: null});
  }

  selectForEdit = (id) => {
    let thing = this.props.things[id];
    this.setState({text: thing.text, updateThingId: id});
  }

  submitThing = (e) => {
    e.preventDefault();
    if (this.state.updateThingId === null) {
      this.props.addThing(this.state.text);
    } else {
      this.props.updateThing(this.state.updateThingId, this.state.text);
    }
    this.resetForm();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to the awesome test component!</h2>
          <p>
            <Link to="/contact">Click Here</Link> to go nowhere!
            <Link to="/about">Click Here</Link> to go where!
          </p>
        </div>
        <hr />

          <Waveform src={'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'} />

        <div>
          <h3>Add new things!!!</h3>
          <form onSubmit={this.submitThing}>
            <input
              value={this.state.text}
              placeholder="Enter a thing here..."
              onChange={(e) => this.setState({text: e.target.value})}
              required />
            <input type="submit" value="Save" />
            <button onClick={this.resetForm}>Reset</button>
          </form>
        </div>

        <div>
          <h3>Things</h3>
          <table>
            <tbody>
              {this.props.things.map((thing, id) => (
                <tr key={`thing_${id}`}>
                  <td>{thing.text}</td>
                  <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                  <td><button onClick={() => this.props.deleteThing(id)}>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

// This is where the props are named and imported from the state
const mapStateToProps = state => {
  return {
    things: state.example,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addThing: (text) => {
      dispatch(example.addThing(text));
    },
    updateThing: (id, text) => {
      dispatch(example.addThing(id, text));
    },
    deleteThing: (id) => {
      dispatch(example.deleteThing(id));
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Example);
