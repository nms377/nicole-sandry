import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {
	render() {
		return(
			<div id="Work">
				<div id="Food">
					<Link to='/work/food'>Food</Link>
				</div>
				<div id="People">
					<Link to='/work/people'>People</Link>
				</div>
				<div id="Pets">
					<Link to='/work/pets'>Pets</Link>
				</div>
			</div>
		)
	}
}

export default Work;