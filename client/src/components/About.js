import React, { Component } from "react";
import Portrait from "../assets/nicolesandry.jpg";

class About extends Component {
	render() {
		return (
			<div id="About">
				<div id="About-Container">
					<img src={Portrait} alt="Self-portrait" height="333" />
					<div id="text">
						<p>
							Nicole is a self taught digital photographer and designer based in
							Hawaii. She further developed her craft of food photography and
							design in her last role at Handcrafted Restaurants where she
							oversaw the social media, brand reputation, marketing, and menu
							design across three different restaurants. She enjoys learning new
							concepts, having completed a Javascript Web Engineering coding
							bootcamp last summer through DevLeague, Hawaii’s premiere learning
							bootcamp. She currently freelances as a Web Designer while she
							makes the shift from Business Administration to Frontend
							Development.
						</p>

						<p>
							Nicole is available for web design and social media marketing
							projects, as well as private consultations. You can reach Nicole
							at <a href="mailto:nsandry@gmail.com">nsandry@gmail.com</a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
