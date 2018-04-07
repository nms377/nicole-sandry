import React, { Component } from 'react';
const GitHub = require('../assets/footer/GitHub.svg');
const LinkedIn = require('../assets/footer/LinkedIn.svg');
const IG = require('../assets/footer/Instagram.svg');
const email = require('../assets/footer/Email.svg');

const Footer = () => {
	return(
		<div id="footer">
				<a href="mailto:nsandry@gmail.com" className="svg"><img src={email} alt="Email nsandry@gmail.com" /></a>
				<a href="https://github.com/nms377" className="svg" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="View my GitHub Page" /></a>
				<a href="https://www.linkedin.com/in/nicolesandry" className="svg" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="View my LinkedIn Profile" /></a>
				<a href="https://www.instagram.com/nicolesandry/" className="svg" target="_blank" rel="noopener noreferrer"><img src={IG} alt="View my Instagram Profile" /></a>
		</div>
	)
}

export default Footer;