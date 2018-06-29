import React, { Component } from "react";
import Portrait from "../assets/nicolesandry2.jpg";

class About extends Component {
	render() {
		return (
			<div id="About">
				<div id="About-Container">
					<img src={Portrait} alt="Self-portrait" height="333" />
					<div id="text">
						<p>
							I am a digital photographer and designer based in Hawaii. I
							developed my craft of food photography and design in my last role
							at Handcrafted Restaurants overseeing the social media, brand
							reputation, and marketing. I enjoy learning new concepts having
							completed a Javascript Web Engineering coding bootcamp last summer
							and am seeking opportunities in Front End Development.
						</p>

						<p>
							I am available for web design and social media marketing projects,
							as well as private consultations. Contact me at <a href="mailto:nsandry@gmail.com">nsandry@gmail.com</a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
