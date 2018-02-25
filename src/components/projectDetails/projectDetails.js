import React from 'react';
import './projectDetails';

export default function projectDetails(props){
  return (
    <div className="portfolioLinks">
      <img className="grid-right" src={require(`${props.image}`)} />
      <div className="grid-left">
        <h2>{props.title}</h2>
        <p>{props.about}</p>
        <p>{props.tech}</p>
        <p>{props.learned}</p>
        <a href={props.link} target="_blank"><button>See Live Site</button></a>
      </div>
    </div>
  );
}