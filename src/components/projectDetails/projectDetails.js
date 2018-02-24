import React from 'react';
import './projectDetails';
//import Collapsible from 'react-collapsible';

export default function projectDetails(props){
  return (
    <div className="portfolioLinks">
      <img className="grid-right" src={require(`${props.image}`)} />
      <div className="grid-left">
        <h2>Title</h2>
        <p>{props.about}</p>
        <p>{props.tech}</p>
        <p>{props.learned}</p>
        <a href={props.link} target="_blank"><button>See Live Site</button></a>
        {/*<Collapsible trigger="About This Project" transitionTime={100}>
          <p>{props.about}</p>
        </Collapsible>
        <Collapsible trigger="Technologies Used"  transitionTime={100}>
          <p>{props.tech}</p>
        </Collapsible>
        <Collapsible trigger="What I Learned"  transitionTime={100}>
          <p>{props.learned}</p>
        </Collapsible>*/}
      </div>
    </div>
  );
}