import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div id="Nav">
				<Link to='/' id="Nicole-Sandry">Nicole Sandry</Link>
				<Link className="Nav-Link" to='/work'>Work</Link>
				<Link className="Nav-Link" to='/resume'>Resume</Link>
				<Link className="Nav-Link" to='/about'>About</Link>
			</div>
		)
	}
}

export default Nav;