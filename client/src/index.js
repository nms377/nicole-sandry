import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Work2 from "./components/Work-2";
import Resume from "./components/Resume";
import Developer from "./components/Developer";
import Photos from "./components/Photos";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./index.css";

import { HashRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div>
			<Nav />
			<Route exact path="/" component={Developer} />
			<Route path="/work" component={Work2} />
			<Route path="/resume" component={Resume} />
			<Route path="/about" component={About} />
			<Route path="/work/developer" component={Developer} />
			<Route path="/work/photos" component={Photos} />
			<Footer />
		</div>
	</Router>,
	document.getElementById("root")
);
