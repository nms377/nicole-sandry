import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Food from './components/Food';
import People from './components/People';
import Pets from './components/Pets';
import Nav from './components/Nav';
import './index.css';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Nav />
			<Route exact path='/' component={ App } />
			<Route path='/about' component={ About } />
			<Route path='/work' component={ Work } />
			<Route path='/work/food' component={ Food } />
			<Route path='/work/people' component={ People } />
			<Route path='/work/pets' component={ Pets } />
			<Route path='/contact' component={ Contact } />
	  </div>
  </Router>,
	document.getElementById('root')
);
