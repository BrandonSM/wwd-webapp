// Footer component
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {  
	render() { 
		return (
   <div className="footer-container">
   	<div className="footer-left">
		<h2>wwd.</h2>
   		<p></p>
   		<p></p> 
   	</div>
   	<div className="footer-right">
   		<a href="#">specials.</a>
   		<a href="#">places.</a>
   		<a href="#">get ahold of us.</a>
   	</div>
   </div>
 );}
}

// Exports the Footer component to view
export default Footer;