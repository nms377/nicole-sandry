import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

	render(){
		return(
			<div id="About">
				<img src="/people/_RI_5176.jpg" alt="Self-portrait" height="333"></img>
				<p>I am a photographer and web developer based on Oahu, Hawaii.</p>
				
				<p>I specialize in portraiture, food photography, and web design. <Link to='/contact'>Contact</Link> me for more information.</p>
			</div>
		)
	}

}

export default About;