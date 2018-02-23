import React from 'react';
import './projectDetails';
import Collapsible from 'react-collapsible';

export default function projectDetails(props){
  return (
    <div className="portfolioLinks">
      <a href={props.link} target="_blank">
        <img src={require(`${props.image}`)} />
      </a>
      <div className="acordionDiv">
        <Collapsible trigger="About This Project" transitionTime={100}>
          <p>{props.about}</p>
        </Collapsible>
        <Collapsible trigger="Technologies Used"  transitionTime={100}>
          <p>{props.tech}</p>
        </Collapsible>
        <Collapsible trigger="What I Learned"  transitionTime={100}>
          <p>{props.learned}</p>
        </Collapsible>
      </div>
    </div>
  );
}