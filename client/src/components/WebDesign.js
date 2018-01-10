import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WebDesign extends Component {

	render(){
		return(
			<div id="Photography">
				<div id="InstAngular">
					<p>Recreated my Intagram feed using Angular.</p>
				</div>
				<div id="Hele">
					<p>Mock up of a travel planning website, <a href="https://hele.io/" target="_blank" rel="nooperner noreferrer" >Hele</a>.</p>
				</div>
				<div id="Hackathon">
					<p>Project from the 2017 AT&T Hackathon. Created a web app luggage concierge service in Honolulu, Hawaii.</p>
				</div>
			</div>
		)
	}

}

export default WebDesign;