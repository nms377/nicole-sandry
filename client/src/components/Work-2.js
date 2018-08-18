import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Developer from "./Developer";

const workIndex = [
  {
    title: "Hele",
    description: "A web app that finds travel accommodations and builds a custom travel itinerary."
  },
  {
    title: "AT&T Hackathon 2017",
    description: "A hypothetical luggage concierge servicing Oahu visitors."
  },
  {
    title: 'React Kanban',
    description: 'A digital Kanban board made with React.'
  },
  {
    title: 'React Instafeed',
    description: 'Recreation of my personal Instagram feed using ReactJS.'
  },
  {
    title: 'Monkeypod Kitchen',
    description: 'Food Photography.'
  },
  {
    title: 'Moku Kitchen',
    description: 'Food Photography.'
  },
  {
    title: 'The Beach House Restaurant',
    description: 'Food Photography.'
  },
  {
    title: 'Portraits',
    description: 'Grad Photos, Engagements, and Maternity Shoots.'
  }
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseHoverShowDescription: false
    };
  }

  // Mouse over element to show work description
  mouseHoverShowDescription() {
    this.setState({
      mouseHoverShowDescription: !this.state.mouseHoverShowDescription
    });
  }

  render() {
    return (
      <div id="workMainContainer">    
        <div className="WorkComponents">
          {workIndex.map((el, i, arr) => (
            <div className="WorkContainers" key={i}>
              <h2 className="WorkTitle">{el.title}</h2>
              <p className="WorkDescription">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
