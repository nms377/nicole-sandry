import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<div id="Nav">
				<Link to='/'><h1>Nicole Sandry</h1></Link>
				<ul>
					<li><Link to='/photography'>Photography</Link></li>
					<li><Link to='/webdesign'>Web Design</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
			</div>
		)
	}
}

export default Nav;