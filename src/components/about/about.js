import React from 'react';
import './about.css';

export default function App(){
  
  return (
    <div className="aboutSection">
      <div className="mePicture">
        <img alt="bioImg" src={require("./izzy.jpg")}/>
        <h1>Katie West</h1>
        <p>Full Stack Developer | Artist | Outdoor Enthusiast | Dog Lover</p>
      </div>
      <div className="contactHeader">
        <span></span>
        <h3>About</h3>
        <span></span>
      </div>
      <div className="bio">
        <p>I am a Portland Oregon based developer who began teaching myself to code after taking a series of Adobe Illustrator and Photoshop classes.
          I loved the things that I was able to create with those applications and began playing around with designing and building simple static web pages.
          Fast forward to today and I am in love with coding. I really enjoy problem solving and learning new ways to make myself a better programmer.</p>
        <p>When I'm not coding, I love to hike and camp with my dog Izzy, drink delicious PNW IPA's and lose at trivia at my neighborhood pub.
        I hope you enjoy looking at my projects as much as I enjoyed building them!</p>
      </div>
    </div>
  );
}