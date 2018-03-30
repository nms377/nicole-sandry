import React, { Component } from 'react';

// contact icons
import Email from '../assets/footer/Email.svg';
import GitHub from '../assets/footer/GitHub.svg';
import LinkedIn from '../assets/footer/LinkedIn.svg';

const Resume = () => {

	return(
		<div id="Resume">
		<div id="resume-container">
			<div id="contact-container">
				<h1 id="contact-header">Contact</h1>
				<ol id="contact">
					<li><a href="mailto:nsandry@gmail.com"><img id="email" src={Email} alt="Email Icon"/>nsandry@gmail.com</a></li>
					<li><a href="https://github.com/nms377" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub Icon"/>Github.com/nms377</a></li>
					<li><a href="https://www.linkedin.com/in/nicolesandry" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn Icon"/>LinkedIn.com/nicolesandry</a></li>
				</ol>
			</div>
			<hr className="lineBreak"/>
			<div id="dev-exp">
				<h2 id="development-experience">Development Experience</h2>
				<h3 id="hele" className="position">Developer</h3>
				<h4 id="-hele-io-https-hele-io-" className="company"><a href="https://hele.io/" target="_blank" rel="noopener noreferrer">Hele.io</a></h4>
				<h5 id="may-2017" className="duration">Honolulu, HI May 2017</h5>
				<ul className="responsibilities">
					<li>Created a web-based application generating a personal travel itinerary by the most affordable price</li>
					<li>Created backend database with PostgreSQL and Sequelize ORM</li>
					<li>Designed the User Interface with React, SASS, and Gulp</li>
					<li>Designed the logo</li>
				</ul>
			</div>
			<hr className="lineBreak"/>
			<div id="pro-exp">
				<h2 id="professional-experience">Professional Experience</h2>
				<h3 id="executive-assistant" className="position">Office Manager & Social Media Manager</h3>
				<h4 id="handcrafted-restaurants-llc" className="company"><a href="http://www.handcraftedrestaurants.com/" target="_blank" rel="noopener noreferrer">Handcrafted Restaurants</a></h4>
				<h5 id="hi-aug-2013-present" className="duration">Kailua, HI Aug 2013 – Dec 2017</h5>
				<ul className="responsibilities">
					<li>Coordinated with third party developers and designers to maintain company websites and storefronts</li>
					<li>Managed online reputation & marketing while building a following of 5,000+ on Instagram and 12,000+ on Facebook</li>
					<li>Designed print collateral, menus, magazine ads, banners, posters, signage, and photography</li>
					<li>Established menu editing protocols to maintain brand and product consistency across three restaurant concepts</li>
					<li>Aided in the launch of two restaurant concepts and two restaurant acquisitions</li>
				</ul>
			</div>	
			<hr className="lineBreak"/>
			<div id="edu">
				<h2 id="education">Education</h2>
				<h3 id="devleague">Fullstack JavaScript Web Engineering</h3>
				<h5 id="devleague">DevLeague, Nov 2016 - May 2017</h5>
				<h3 id="bachelor-of-arts-in-interdisciplinary-studies">Bachelor of Arts in Interdisciplinary Studies</h3>
				<h4 id="communications-with-a-minor-in-social-entrepreneurship">Communications, Minor in Social Entrepreneurship</h4>
				<h5 id="new-york-university-gallatin-school-of-individualized-study-2011-2013">New York University - Gallatin School of Individualized Study, 2011 – 2013</h5>
			</div>
			<hr className="lineBreak"/>				
			<div id="skills-container">
				<h2 id="technical-skills">Technical Skills</h2>
				<div id="tech-skills-col">
					<div className="skills">
						<h4 id="languages">Languages</h4>
						<p>
							JavaScript, HTML5, CSS, SQL
						</p>
					</div>
					<div className="skills">
						<h4 id="frontend">Frontend</h4>
						<p>
							ES6, React, Redux, CSS3, SASS
						</p>
					</div>
					<div className="skills">
						<h4 id="server-side">Server-Side</h4>
						<p>
							NodeJS, Express, Sequelize ORM
						</p>
					</div>
					<div className="skills">
						<h4 id="database">Database</h4>
							<p>PostgreSQL </p>
					</div>
					<div className="skills">
						<h4 id="web-skills">Web Skills</h4>
						<ul>
							<li>Responsive/Mobile First Web Development</li>
							<li>TDD/BDD</li>
							<li>RDBMS/NoSQL</li>
							<li>User Auth</li>
							<li>API Integration</li>
						</ul>
					</div>
					<div className="skills">
						<h4 id="business-development">Business Development</h4>
						<ul>
							<li>Adobe InDesign CC</li>
							<li>Adobe Photoshop CC</li>
							<li>Adobe Illustrator CC</li>
						</ul>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Resume;