import React from 'react';
import './projectDetails';

export default function projectDetails(props){
  return (
    <div className="portfolioLinks">
      <img className="grid-right" src={require(`${props.image}`)} />
      <div className="grid-left">
        <h2>{props.title}</h2>
        <h4>About This Project</h4>
        <p>{props.about}</p>
        <h4>What I Learned</h4>
        <p>{props.learned}</p>
        <h4>Technology Used</h4>
        <p>{props.tech}</p>
        <a href={props.link} target="_blank"><button>See Live Site</button></a>
      </div>
    </div>
  );
}