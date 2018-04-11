import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Mobile Menu Icon
import List from '../assets/list.svg';

class Nav extends Component {
	constructor(props){
		super(props);
			this.state = {
				showMobileMenu: false
			};
	}

	// Toggle to show and hide mobile menu
	toggle(){
		this.setState({
			showMobileMenu: !this.state.showMobileMenu,
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
						<NavLink className="NavLink" to='/work' onClick={() => this.devComponent()} activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							Work
						</NavLink>
						<NavLink className="NavLink" to='/resume' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							Resume
						</NavLink>
						<NavLink className="NavLink" to='/about' activeStyle={{ textDecoration: 'underline', textDecorationColor: 'rgb(255,255,255)', fontWeight: '600' }}>
							About
						</NavLink>
					</div>
					<div id="mobile-icon" onClick={() => this.toggle()}>
						<img src={List} alt="Mobile Nav Icon"/>
					</div>
				</div>
				{
					this.state.showMobileMenu?
					<div id="mobile-nav">
						<NavLink className="NavLinkMobile" to='/work' onClick={() => this.toggle()}>Work</NavLink>
						<NavLink className="NavLinkMobile" to='/resume' onClick={() => this.toggle()}>Resume</NavLink>
						<NavLink className="NavLinkMobile" to='/about' onClick={() => this.toggle()}>About</NavLink>
					</div>
					:null
				}
			</div>
		)
	}
}

export default Nav;