import React, { Component } from "react";

// contact icons
import Email from "../assets/footer/Email.svg";
import GitHub from "../assets/footer/GitHub.svg";
import LinkedIn from "../assets/footer/LinkedIn.svg";
import Download from "../assets/Download.svg";
import PDF from "../assets/Nicole-Sandry-Resume.pdf";
import "../index.css";

const Resume = () => {
	return (
		<div id="Resume">
			<div id="resume-container">
				<div id="contact-container">
					<h2 id="contact-header">Contact</h2>
					<span className="contact">
						<a href="mailto:nsandry@gmail.com">
							<img
								id="email-icon"
								src={Email}
								alt="Email Nicole at nsandry@gmail.com"
							/>nsandry@gmail.com
						</a>
					</span>
					<span className="contact">
						<a
							href="https://github.com/nms377"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={GitHub} alt="Visit Nicole's Github Profile" />Github.com/nms377
						</a>
					</span>
					<span className="contact">
						<a
							href="https://www.linkedin.com/in/nicolesandry"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={LinkedIn} alt="Visit Nicole's LinkedIn Profile" />LinkedIn.com/nicolesandry
						</a>
					</span>
					<span className="contact">
						<a href={PDF}
							 target="_blank"
							 rel="noopener noreferrer">
							<img
								src={Download}
								alt="Download a PDF copy of Nicole's resume"
							/>Download Resume
						</a>
					</span>
				</div>
				<hr className="lineBreak" />
				<div id="right-container">
					<h2 id="development-experience">Development Experience</h2>
					<h3 id="hele" className="position">
						Developer
					</h3>
					<h4 id="-hele-io-https-hele-io-" className="company">
						<a
							href="https://hele.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Hele.io
						</a>
					</h4>
					<h5 id="may-2017">
						Honolulu, HI May 2017
					</h5>
					<ul className="responsibilities">
						<li className="responsibilities" id="resp-skills">
							Created a web-based application generating a personal travel
							itinerary by the most affordable price
						</li>
						<li className="responsibilities" id="resp-skills">Created backend database with PostgreSQL and Sequelize ORM</li>
						<li className="responsibilities" id="resp-skills">Designed the User Interface with React, SASS, and Gulp</li>
						<li className="responsibilities" id="resp-skills">Designed the logo</li>
					</ul>
					<hr className="lineBreak" />
					<h2 id="professional-experience">Professional Experience</h2>
					<h3 id="office-social-media-manager" className="position">
						Office & Social Media Manager
					</h3>
					<h4 id="handcrafted-restaurants-llc" className="company">
						<a
							href="http://www.handcraftedrestaurants.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Handcrafted Restaurants
						</a>
					</h4>
					<h5 id="hi-aug-2013-dec-2017">
						Kailua, HI Aug 2013 – Dec 2017
					</h5>
					<ul className="responsibilities">
						<li className="responsibilities" id="resp-skills">
							Coordinated with third party developers and designers to maintain
							company websites and storefronts
						</li>
						<li className="responsibilities" id="resp-skills">
							Managed online reputation & marketing while building a following
							of 5,000+ on Instagram and 12,000+ on Facebook
						</li>
						<li className="responsibilities" id="resp-skills">
							Designed print collateral, menus, magazine ads, banners, posters,
							signage, and photography
						</li>
						<li className="responsibilities" id="resp-skills">
							Established menu editing protocols to maintain brand and product
							consistency across three restaurant concepts
						</li>
						<li className="responsibilities" id="resp-skills">
							Aided in the launch of two restaurant concepts and two restaurant
							acquisitions
						</li>
					</ul>
					<h3 id="resident-assistant">Resident Assistant</h3>
					<h4 id="office-of-residential-life-housing-services-at-new-york-university">
						<a
							href="https://www.nyu.edu/students/student-information-and-resources/housing-and-dining/on-campus-living/staff.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							Office of Residential Life &amp; Housing Services at New York
							University
						</a>
					</h4>
					<h5 id="ny-aug-2012-may-2013">New York, NY Aug 2012 – May 2013</h5>
					<ul className="responsibilities">
						<li className="responsibilities" id="resp-skills">
							Advocated for and represented two floors of 49 students by
							communicating concerns to supervisors and other building team
							members
						</li>
						<li className="responsibilities" id="resp-skills">
							Collaborated with a student staff of 16 and 3 professional staff
							members on programs and administrative responsibilities to foster
							a positive living and learning community
						</li>
						<li className="responsibilities" id="resp-skills">
							Received intensive training and professional development in
							leadership, mediation, and communication with students and
							families
						</li>
					</ul>
					<hr className="lineBreak" />
					<h2 id="education">Education</h2>
					<h3 id="fullstack-javascript-web-engineering">Fullstack JavaScript Web Engineering</h3>
					<h5 id="devleague">
						<a
							href="https://www.devleauge.com/tracks/view/javascript-web-engineer"
							target="_blank"
							rel="noopener noreferrer"
						>
							DevLeague
						</a>, Nov 2016 - May 2017
					</h5>
					<h3 id="bachelor-of-arts-in-interdisciplinary-studies">
						Bachelor of Arts in Interdisciplinary Studies
					</h3>
					<h4 id="communications-with-a-minor-in-social-entrepreneurship">
						Communications, Minor in Social Entrepreneurship
					</h4>
					<h5 id="new-york-university-gallatin-school-of-individualized-study-2011-2013">
						<a
							href="https://www.gallatin.nyu.edu"
							target="_blank"
							rel="noopener noreferrer"
						>
							New York University - Gallatin School of Individualized Study
						</a>, 2011 – 2013
					</h5>
				</div>
				<hr className="lineBreak" />
				<div id="skills-container">
					<h2 id="technical-skills">Technical Skills</h2>
					<div id="tech-skills-col">
						<div className="skills">
							<h4 id="languages">Languages</h4>
							<p>JavaScript, HTML5, CSS, SQL</p>
						</div>
						<div className="skills">
							<h4 id="frontend">Frontend</h4>
							<p>ES6, React, Redux, CSS3, SASS</p>
						</div>
						<div className="skills">
							<h4 id="server-side">Server-Side</h4>
							<p>NodeJS, Express, Sequelize ORM</p>
						</div>
						<div className="skills">
							<h4 id="database">Database</h4>
							<p>PostgreSQL </p>
						</div>
						<div className="skills">
							<h4 id="web-skills">Web Skills</h4>
							<ul>
								<li id="resp-skills">Responsive/Mobile First Web Development</li>
								<li id="resp-skills">TDD/BDD</li>
								<li id="resp-skills">RDBMS/NoSQL</li>
								<li id="resp-skills">User Auth</li>
								<li id="resp-skills">API Integration</li>
							</ul>
						</div>
						<div className="skills">
							<h4 id="business-development">Business Development</h4>
							<ul>
								<li id="resp-skills">Adobe InDesign CC</li>
								<li id="resp-skills">Adobe Photoshop CC</li>
								<li id="resp-skills">Adobe Illustrator CC</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
