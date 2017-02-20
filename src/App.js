import React from 'react';
import HelloWorld from './components/HelloWorld';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Brandon"/>
      <Navigation name="US"/>
      <Content name="zip_code"/>
    </div>
  );
};

export default App;