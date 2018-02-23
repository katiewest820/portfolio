import React from 'react';
import './contact.css';

export default function Contact(){
  return (
    <div className="contactSection">
      <div className="aboutHeader">
        <span></span>
        <h3>Contact</h3>
        <span></span>
      </div>
      <div className="contactInfo">
        <div>
          <h4>Contact Me</h4>
          <p>katiewest820@gmail.com</p>
          <p>503-381-8629</p>
        </div>
        <div>
          <h4>Lets Connect</h4>
          <img className="gh" src={require('./github.png')} height="50"/>
          <img src={require('./linkedin.png')} height="60"/>
        </div>
      </div>
    </div>
  );
}