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
        <a href="mailto:katiewest820@gmail.com"><img src={require('./email.png')} height="50"/></a>
        <img className="gh" src={require('./github.png')} height="50"/>
        <img src={require('./linkedin.png')} height="60"/>
      </div>
    </div>
  );
}