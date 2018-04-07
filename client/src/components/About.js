import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Portrait from '../assets/_RI_5176.jpg';

class About extends Component {

	render(){
		return(
			<div id="About">
				<div id="About-Container">
					<img src={Portrait} alt="Self-portrait" height="333"></img>
					<div id="text">
						<p>I am a Web Developer based on Oahu, Hawaii.</p>				
						<p>I am a Web Developer based on Oahu, Hawaii.</p>				
					</div>
				</div>
			</div>
		)
	}

}

export default About;