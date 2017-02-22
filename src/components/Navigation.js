// Navigation
import React, { Component } from 'react';
import './Navigation.css';

// Navigation of app
class Navigation extends Component {
  render() {
    return (
      <ul className="navigation-list">
      	<li className="navigation-list-item"><a href="#">wwd.</a></li>
      	<li className="navigation-list-item"><a href="#">specials.</a></li>
      	<li className="navigation-list-item"><a href="#">places.</a></li>
      	<li className="navigation-list-item"><a href="#">get ahold of us.</a></li>
      </ul>
    );
  }
}

// Exports the component to view
export default Navigation;