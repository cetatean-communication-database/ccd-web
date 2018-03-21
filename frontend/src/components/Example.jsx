import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Example extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to the test component!</h2>
          <p>
            <Link to="/contact">Click Here</Link> to go nowhere!
          </p>
        </div>
        <hr />

        <div>
          <h3>Notes</h3>
          <table>
            <tbody>
              {this.props.things.map(thing => (
                <tr>
                  <td>{thing.text}</td>
                  <td><button>edit</button></td>
                  <td><button>delete</button></td>
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Example);
