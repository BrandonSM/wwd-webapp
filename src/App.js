import React from 'react';
import HelloWorld from './components/HelloWorld';
import Navigation from './components/Navigation';
import Content from './components/Content';
import ZipForm from './components/ZipForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Brandon"/>
      <Navigation name="US"/>
      <Content name="zip_code"/>
      <ZipForm />
      <Footer />
    </div>
  );
};

export default App;