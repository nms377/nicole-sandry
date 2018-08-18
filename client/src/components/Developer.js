import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
const HeleIo = require("../assets/heleio2.png");
const Leiover = require("../assets/leiover2.png");
const Kanban = require("../assets/react-kanban.png");
const Instafeed = require("../assets/react-insta.png");

const Developer = () => (
	<div id="workContainer">
		<div className="work">
			<a href="https://hele.io/" target="_blank" rel="noopener noreferrer">
				<img className="workImg" src={HeleIo} alt="Hele.io homepage" />
			</a>
			<h1 className="company">Hele</h1>
			<h4 className="position">Developer</h4>
			<p className="description">
				Find travel accommodations at an affordable price and consolidate them
				in a personal travel itinerary.
			</p>
			<p className="description">
				Collaborated with three other students as part of our capstone project
				at DevLeague.
			</p>
			<div className="workContributions">
				<h4 className="contributions">Contributions:</h4>
				<ul>
					<li>
						Creating the database schema using Sequelize ORM to collect user
						information and data from travel APIs
					</li>
					<li>Designing the user interface with ReactJS, SASS, and CSS3</li>
					<li>Designed the logo</li>
				</ul>
			</div>
			<div className="links">
				<p>
					Website:
					<a href="https://hele.io/" target="_blank" rel="noopener noreferrer">
						https://hele.io/
					</a>
				</p>
				<p>
					GitHub:
					<a
						href="https://github.com/nms377/Hele"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/nms377/Hele
					</a>
				</p>
			</div>
		</div>
		<div className="work">
			<a
				href="https://github.com/nms377/ATTHackathon-luggage"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="workImg" src={Leiover} alt="Luggage Lei Over" />
			</a>
			<h1 className="company">Luggage Lei Over Hackathon Project</h1>
			<h4 className="position">Developer</h4>
			<p className="description">
				A potential service transporting luggage from the airport to hotel
				allowing visitors to explore without worrying about where to store their
				belongings.
			</p>
			<p className="description">
				Created during AT&T IoT Hackathon March 2017 with two other developers.
			</p>
			<div className="workContributions">
				<h4 className="contributions">Contributions:</h4>
				<ul>
					<li>
						Created the database schema using Sequelize ORM and Postgresql to
						store reservations and user information.
					</li>
					<li>
						Used Handlebars to design reservation forms and confirmation pages.
					</li>
				</ul>
			</div>
			<div className="links">
				<p>
					GitHub:
					<a
						href="https://github.com/nms377/ATTHackathon-luggage"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/nms377/ATTHackathon-luggage
					</a>
				</p>
			</div>
		</div>
		<div className="work">
			<a
				href="https://github.com/nms377/React-Kanban"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="workImg" src={Kanban} alt="React Kanban" />
			</a>
			<h1 className="company">React Kanban</h1>
			<p className="description">
				A digital Kanban board made with React. A portfolio project created in
				DevLeague's Full Stack JavaScript development bootcamp.
			</p>
			<div className="workContributions">
				<h4 className="contributions">Built Using:</h4>
				<ul>
					<li>Front-end made with ReactJS</li>
					<li>HTML, CSS, & SASS for Responsive/Mobile First Web Development</li>
					<li>Back end server made with Express</li>
					<li>Database designed with Sequelize ORM and Postgresql</li>
				</ul>
			</div>
			<div className="links">
				<p>
					GitHub:
					<a
						href="https://github.com/nms377/React-Kanban"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/nms377/React-Kanban
					</a>
				</p>
			</div>
		</div>
		<div className="work">
			<a
				href="http://nicolesandry.com/react-instafeed/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className="workImg"
					src={Instafeed}
					alt="Recreationg of my Instagram feed using React"
				/>
			</a>
			<h1 className="company">React Instafeed</h1>
			<p className="description">
				Recreation of my personal Instagram feed using React.
			</p>
			<div className="workContributions">
				<h4 className="contributions">Built Using:</h4>
				<ul>
					<li>Front-end made with ReactJS</li>
					<li>HTML, CSS, & SASS for Responsive/Mobile First Web Development</li>
				</ul>
			</div>
			<div className="links">
				<p>
					Website:
					<a
						href="http://nicolesandry.com/react-instafeed/"
						target="_blank"
						rel="noopener noreferrer"
					>
						http://nicolesandry.com/react-instafeed/
					</a>
				</p>
				<p>
					GitHub:
					<a
						href="https://github.com/nms377/react-instafeed"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/nms377/react-instafeed
					</a>
				</p>
			</div>
		</div>
	</div>
);

export default Developer;
