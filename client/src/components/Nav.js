import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<Link to='/' id="nicoleSandry">Nicole Sandry</Link>
					<Link className="NavLink" to='/work'>Work</Link>
					<Link className="NavLink" to='/resume'>Resume</Link>
					<Link className="NavLink" to='/about'>About</Link>
					<div id="mobile-icon" onClick={() => this.operation()}>
						<img src={List} alt="Mobile menu list icon" />
					</div>
				</div>
				{
					this.state.showMobileMenu?
					<div id="mobile-nav">
						<Link className="NavLinkMobile" to='/work'>Work</Link>
						<Link className="NavLinkMobile" to='/resume'>Resume</Link>
						<Link className="NavLinkMobile" to='/about'>About</Link>
					</div>
					:null
				}
			</div>
		)
	}
}

export default Nav;