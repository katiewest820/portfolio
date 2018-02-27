import React from 'react';
import './header.css';
import Scrollchor from 'react-scrollchor';

export default class App extends React.Component {
  render() {
    return (
      <header className="headerShell" id="/">
          <Scrollchor to="projects" animate={{offset: 0, duration: 800}}>Projects</Scrollchor>
          <Scrollchor to="contact" animate={{offset: 0, duration: 800}}>Contact Me</Scrollchor>
      </header>
    );
  }
}