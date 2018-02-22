import React from 'react';
import './about.css';


export default function App(){
  
  return (
    <div className="aboutSection">
      <div className="mePicture">
        <img src="./izzy.jpg"/>
        <h1>Hello I'm Katie</h1>
      </div>
      <div>
        <div className="aboutHeader">
          <span></span>
          <h3>About</h3>
          <span></span>
        </div>
        <div className="aboutMeParagraphs">
          <div className="aboutMeSection">
            <h3>Who</h3>
            <p>is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.</p>
          </div>
          <div className="skillsSection">
            <h3>What</h3>
            <p>is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.</p>
          </div>
          <div className="skillsSection">
            <h3>Where</h3>
            <p>is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.</p>
          </div>
        </div>
      </div>
    </div>
  );
}