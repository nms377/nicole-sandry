import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import List from '../assets/list.svg';

class Nav extends Component {
	constructor(props){
		super(props);
			this.state = {
				showMobileMenu: false
			};
	}

	// Toggle to show and hide mobile menu
	operation(){
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
					<div id="mobile-icon" onClick={() => this.operation()}>
						<img src={List} alt="Mobile Nav Icon"/>
					</div>
				</div>
				{
					this.state.showMobileMenu?
					<div id="mobile-nav">
						<NavLink className="NavLinkMobile" to='/work' onClick={() => this.operation()}>Work</NavLink>
						<NavLink className="NavLinkMobile" to='/resume' onClick={() => this.operation()}>Resume</NavLink>
						<NavLink className="NavLinkMobile" to='/about' onClick={() => this.operation()}>About</NavLink>
					</div>
					:null
				}
			</div>
		)
	}
}

export default Nav;