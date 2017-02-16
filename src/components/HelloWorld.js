// Hello World
import React, { Component } from 'react';
import './HelloWorld.css';

// Default app
class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">Hello {this.props.name}!</div>
    );
  }
}

// Exports the component to view
export default HelloWorld;

// render() { return(); }

// class InsertClassName extends Component {
// 	render() {
//   	return ( INSERT JSX HERE );
// 	}
// }