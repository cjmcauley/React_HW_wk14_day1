import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <>
        <a href={this.props.url}><h2>{this.props.name}</h2></a>
      </>
    )
  }
}

export default Film;
