import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Developer from './Developer';

const Work = ({ match }) => (
  <div>
    <ul>
      <li>
        <NavLink to={`${match.url}/developer`}  activeStyle={{ textDecoration: 'underline', fontWeight: '600' }}>Web Design</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/photos`}  activeStyle={{ textDecoration: 'underline', fontWeight: '600' }}>Photos</NavLink>
      </li>
    </ul>

    <Route
      exact
      path={match.url}
      render={() => <Developer />}
    />
  </div>
);

export default Work;