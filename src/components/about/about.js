import React from 'react';
import './about.css';

export default function App(){
  
  return (
    <div className="aboutSection">
      <div className="mePicture">
        <img alt="bioImg" src={require("./izzy.jpg")}/>
        <h1>Katie West</h1>
        <p>Full Stack Developer</p>
      </div>
      <div className="contactHeader">
        <span></span>
        <h3>About</h3>
        <span></span>
      </div>
      <div className="bio">
        <p>I am a Portland based developer who is driven and passionate about programming.
          I enjoy learning new languages and frameworks and I actively seek out educational opportunities that
          keep me up-to-date on industry trends.
          I pride myself in having a collaborative and open minded attitude, a passion for design and programming and a drive to produce
          high quality, user friendly interfaces built with clean and maintainable code.</p>
        <p>When I'm not coding, I love to hike and camp with my dog Izzy, drink delicious PNW IPA's and lose at trivia at my neighborhood pub.
        I hope you enjoy looking at my projects as much as I have enjoyed building them!</p>
      </div>
    </div>
  );
}