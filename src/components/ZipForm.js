//ZipForm Component
import React, { Component } from 'react';
import './ZipForm.css';

class ZipForm extends Component {  
  render() {
    return(
   <form  className="zipform-form">
    <input type="text" name="zipform-input" className="zipform-input"></input>
    
   </form>
  );}
}

// Exports the ZipForm component to view
export default ZipForm;