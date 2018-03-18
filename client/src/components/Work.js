import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const HeleIo = require('../assets/heleio.png');
const Leiover = require('../assets/leiover.png');


class Work extends Component {

	render() {
		return(
			<div id="work-container">
				<h1>Work</h1>
				<div className="Work">
					<a href="https://hele.io/" target="_blank" rel="noopener noreferrer"><img src={ HeleIo } alt="Hele.io homepage"/></a>
					<p>Hele</p>
					<p>Developer</p>
					<p>Find travel accommodations at an affordable price and consolidate them in a personal travel itinerary.</p>
					<p>Collaborated with three other students as part of our capstone project at DevLeague.</p>
					<ul>My Contributions:
						<li>Creating the database schema using Sequelize ORM to collect user information and data from travel APIs</li>
						<li>Designing the user interface with ReactJS, SASS, and CSS3</li>
					</ul>
				</div>
				<div className="Work">
					<a href="https://github.com/nms377/ATTHackathon-luggage" target="_blank" rel="noopener noreferrer"><img src={ Leiover } alt="Luggage Lei Over"/></a>
					<p>Luggage Lei Over Hackathon Project</p>
					<p>Developer</p>
					<p>A potential service transporting luggage from the airport to hotel allowing visitors to explore without worrying about where to store their belongings.</p>
					<p>Created during AT&T IoT Hackathon March 2017 with team mates Danika and Laylo.</p>
					<p>Created the database schema using Sequelize ORM to store data from our forms built using Handlebars. Using a Bootstrap theme allowed us to focus more on back end development during the two day hackathon.</p>
					<p>Code Repository: <a href="https://github.com/nms377/ATTHackathon-luggage" target="_blank" rel="noopener noreferrer">https://github.com/nms377/ATTHackathon-luggage</a></p>
				</div>
				<div className="Work">
					<a>Screenshot</a>
					<p>Company</p>
					<p>Position</p>
					<p>Description</p>
				</div>
			</div>
		)
	}
}

export default Work;