import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Developer from "./Developer";

const workIndex = [
  {
    title: "Hele.io",
    description: "A web app that finds travel accommodations and builds a custom travel itinerary.",
    link: "hele"
  },
  {
    title: "AT&T Hackathon 2017",
    description: "A hypothetical luggage concierge servicing Oahu visitors.",
    link: "ATT-Hackathon"
  },
  {
    title: 'React Kanban',
    description: 'A digital Kanban board made with React.',
    link: "react-kanban"
  },
  {
    title: 'React Instafeed',
    description: 'Recreation of my personal Instagram feed using ReactJS.',
    link: "react-instafeed"
  },
  {
    title: 'Portraits',
    description: 'Grad Photos, Engagements, and Maternity Shoots.',
    link: "portraits"
  },
  {
    title: 'Monkeypod Kitchen',
    description: 'Food Photography.',
    link: "monkeypod"
  },
  {
    title: 'Moku Kitchen',
    description: 'Food Photography.',
    link: "moku"
  },
  {
    title: 'The Beach House',
    description: 'Food Photography.',
    link: "the-beach-house"
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
              <div className="Content">
                <h2 className="WorkTitle">{el.title}</h2>
                <p className="WorkDescription">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
