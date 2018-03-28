import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div id="Nav">
				<Link to='/' id="nicoleSandry">Nicole Sandry</Link>
					<Link className="NavLink" to='/work'>Work</Link>
					<Link className="NavLink" to='/resume'>Resume</Link>
					<Link className="NavLink" to='/about'>About</Link>
			</div>
		)
	}
}

export default Nav;