import React from 'react';
import './projectDetails';

export default function projectDetails(props){
  return (
    <div className="portfolioLinks">
      <img alt={props.title} className="grid-right" src={require(`${props.image}`)} />
      <div className="grid-left">
        <h2>{props.title}</h2>
        <h4>About This Project</h4>
        <p>{props.about}</p>
        <h4>Technology Used</h4>
        <p>{props.tech}</p>
        <a href={props.link} target="_blank"><button>See Live Site</button></a>
        <a href={props.github} target="_blank"><button>See Code</button></a>
      </div>
    </div>
  );
}