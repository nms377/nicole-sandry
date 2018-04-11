import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Photos from './Photos';
import Developer from './Developer';

class Work extends Component{
	constructor(props){
		super(props);
			this.state = {
				hideDeveloperComponent: true
			};
	}

	// Toggle to show and hide mobile menu
	hideDev(){
		this.setState({
			hideDeveloperComponent: false
		});
	}

	render () {
		return (
			<div>
				<ul>
					<li>
						<NavLink to="/work/developer" activeStyle={{ textDecoration: 'underline' }}>Web Design</NavLink>
					</li>
					<li>
						<NavLink to="/work/photos" activeStyle={{ textDecoration: 'underline' }} onClick={() => this.hideDev()}>Photography</NavLink>
					</li>
				</ul>
			
			{
				this.state.hideDeveloperComponent?
					<Developer />
				:null
			}

				{ routes.map((route,i) => <RouteWithSubRoutes key={i} {...route} />)}
			</div>
		)
	}
}

const routes = [
	{
		path: "/work/developer",
		component: Developer
	},
	{
		path: "/work/photos",
		component: Photos
	}
];

const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
);

export default Work;