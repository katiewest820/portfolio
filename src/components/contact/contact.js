import React from 'react';
import './contact.css';
import Scrollchor from 'react-scrollchor';

export default function Contact(){
  return (
    <div className="contactSection" id="contact">
      <div className="contactHeader">
        <span></span>
        <h3>Contact</h3>
        <span></span>
      </div>
      <div className="contactInfo">
        <a href="mailto:katiewest820@gmail.com"><img alt="email" src={require('./email.png')} height="50"/></a>
        <a href="https://github.com/katiewest820" target="_blank" rel="noopener noreferrer"><img alt="github" src={require('./github.png')} height="50"/></a>
        <a href="https://www.linkedin.com/in/katie-west-8134b884/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" src={require('./linkedin.png')} height="60"/></a>
      </div>
        <Scrollchor className="toTop" to="/" animate={{offset: 0, duration: 800}}>Back to Top</Scrollchor>
    </div>
  );
}