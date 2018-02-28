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
        <p>I am a Portland Oregon based developer who is driven and passionate about learning. I enjoy collaborating with others, love the challenge
        of learning a new language or framework and am addicted to solving problems that just don't make sense.
          I strive to always produce clean and efficient code that is easy to understand.</p>
        <p>When I'm not coding, I love to hike and camp with my dog Izzy, drink delicious PNW IPA's and lose at trivia at my neighborhood pub.
        I hope you enjoy looking at my projects as much as I have enjoyed building them!</p>
      </div>
    </div>
  );
}