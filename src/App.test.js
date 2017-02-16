import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloWorld />, div);
});
it('renders a navigation'), ()=> {
	const div = document.createElement('nav');
	ReactDom.render(<App />, div);
});
