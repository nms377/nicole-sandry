import React, { Component } from 'react';
const GitHub = require('../assets/footer/GitHub.svg');
const LinkedIn = require('../assets/footer/LinkedIn.svg');
const IG = require('../assets/footer/Instagram.svg');
const email = require('../assets/footer/Email.svg');

const Footer = () => {
	return(
		<div id="footer">
				<a href="mailto:nsandry@gmail.com"><img src={ email } alt="E-mail nsandry@gmail.com" /></a>
				<a href="https://github.com/nms377" target="_blank" rel="noopener noreferrer"><img src={ GitHub } alt="GitHub" /></a>
				<a href="https://www.linkedin.com/in/nicolesandry" target="_blank" rel="noopener noreferrer"><img src={ LinkedIn } alt="LinkedIn" /></a>
				<a href="https://www.instagram.com/nicolesandry/" target="_blank" rel="noopener noreferrer"><img src={ IG } alt="Instagram" /></a>
		</div>
	)
}

export default Footer;