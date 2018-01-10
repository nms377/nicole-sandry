import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
	render() {
		return(
			<div id="Photography">
				<div id="Food">
					<Link to='/photography/food'>Food</Link>
				</div>
				<div id="People">
					<Link to='/photography/people'>People</Link>
				</div>
				<div id="Pets">
					<Link to='/photography/pets'>Pets</Link>
				</div>
			</div>
		)
	}
}

export default Work;