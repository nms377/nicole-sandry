import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Developer from './components/Developer';
import Photos from './components/Photos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<div>
			<Nav />
			<Route exact path='/' component={ Developer } />
			<Route path='/work' component={ Work } />
			<Route path='/resume' component={ Resume } />
			<Route path='/about' component={ About } />
			<Route path='/work/developer' component={ Developer } />
			<Route path='/work/photos' component={ Photos } />
		  <Footer />
	  </div>
  </Router>,
	document.getElementById('root')
);
