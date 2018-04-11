import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Mobile Menu Icon
import List from '../assets/list.svg';

import Work from './Work';

class Nav extends Component {
	constructor(props){
		super(props);
			this.state = {
				showMobileMenu: false,
				showWorkMenu: false
			};
	}

	// Toggle to show and hide mobile menu
	showHideMobileMenu(){
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		});
	}

	render() {
		return (
			<div id="nav-container">
				<div id="Nav">
					<NavLink id="nicoleSandry" exact to='/' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)'}}>
						Nicole Sandry
					</NavLink>
					<div id="desktop-nav">
						<NavLink className="NavLink" to='/work' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							Work
						</NavLink>
						<NavLink className="NavLink" to='/resume' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							Resume
						</NavLink>
						<NavLink className="NavLink" to='/about' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							About
						</NavLink>
					</div>
					<div id="mobile-icon" onClick={() => this.showHideMobileMenu()}>
						<img src={List} alt="Mobile Nav Icon"/>
					</div>
				</div>
				{
					this.state.showMobileMenu?
					<div id="mobile-nav">
						<NavLink className="NavLinkMobile" to='/work' onClick={() => this.showHideMobileMenu()}>Work</NavLink>
						<NavLink className="NavLinkMobile" to='/resume' onClick={() => this.showHideMobileMenu()}>Resume</NavLink>
						<NavLink className="NavLinkMobile" to='/about' onClick={() => this.showHideMobileMenu()}>About</NavLink>
					</div>
					:null
				}
			</div>
		)
	}
}

export default Nav;