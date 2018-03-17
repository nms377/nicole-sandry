import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Nav />
			<Route exact path='/' component={ Work } />
			<Route path='/work' component={ Work } />
			<Route path='/resume' component={ Resume } />
			<Route path='/about' component={ About } />
		  <Footer />
	  </div>
  </Router>,
	document.getElementById('root')
);
