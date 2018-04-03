import React, { Component } from 'react';
const GitHub = require('../assets/footer/GitHub.svg');
const LinkedIn = require('../assets/footer/LinkedIn.svg');
const IG = require('../assets/footer/Instagram.svg');
const email = require('../assets/footer/Email.svg');

const Footer = () => {
	return(
		<div id="footer">
				<a href="mailto:nsandry@gmail.com"><object type="image/svg+xml" data={email}></object></a>
				<a href="https://github.com/nms377" target="_blank" rel="noopener noreferrer"><object type="image/svg+xml" data={GitHub} /></a>
				<a href="https://www.linkedin.com/in/nicolesandry" target="_blank" rel="noopener noreferrer"><object type="image/svg+xml" data={LinkedIn} /></a>
				<a href="https://www.instagram.com/nicolesandry/" target="_blank" rel="noopener noreferrer"><object type="image/svg+xml" data={IG} /></a>
		</div>
	)
}

export default Footer;