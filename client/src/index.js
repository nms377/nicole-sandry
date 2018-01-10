import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Food from './components/Food';
import People from './components/People';
import Pets from './components/Pets';
import WebDesign from './components/WebDesign';
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
			<Route path='/photography' component={ Photography } />			
			<Route path='/photography/food' component={ Food } />
			<Route path='/photography/people' component={ People } />
			<Route path='/photography/pets' component={ Pets } />
			<Route path='/webdesign' component={ WebDesign } />
			<Route path='/about' component={ About } />
			<Route path='/contact' component={ Contact } />
	  </div>
  </Router>,
	document.getElementById('root')
);
