import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";

const Photos = () => (
	<div>
		<NavLink
			to="/work/photos/people"
			activeStyle={{ textDecoration: "underline" }}
		>
			People
		</NavLink>
		<NavLink
			to="/work/photos/food"
			activeStyle={{ textDecoration: "underline" }}
		>
			Food
		</NavLink>
		{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
	</div>
);

const People = () => <h3>People</h3>;
const Food = () => <h3>Food</h3>;

const routes = [
	{
		path: "/work/photos/people",
		component: People
	},
	{
		path: "/work/photos/food",
		component: Food
	}
];

const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => <route.component {...props} routes={route.routes} />}
	/>
);

export default Photos;
