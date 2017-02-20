// Content
import React, { Component } from 'react';
import './Content.css';

// Default app
class Content extends Component {
  render() {
    return (
      <ul className="content-list">
      	<li className="content-list-item">beer.</li>
      	<li className="content-list-item">shot.</li>
      	<li className="content-list-item">wine.</li>
      	<li className="content-list-item">call liquor.</li>
      	<li className="content-list-item">food</li>
      </ul>
    );
  }
}

// Exports the component to view
export default Content;