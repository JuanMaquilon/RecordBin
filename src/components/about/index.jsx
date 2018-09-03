import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div className="container" >
        <h1>About Page</h1>

        <div className="card border-light mb-3" style={{maxWidth: '30rem'}}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Light card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing.location
  };
}

export default connect(mapStateToProps)(About);
