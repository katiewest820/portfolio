import React from 'react';
import './about.css';


export default function App(){
  
  return (
    <div className="aboutSection">
      <div className="mePicture">
        <img src={require("./izzy.jpg")}/>
        <h1>Katie West</h1>
        <p>Full Stack Developer | Artist | Outdoor Enthusiast | Dog Lover</p>
      </div>
    </div>
  );
}