import React from 'react';
import './header.css';
import Scrollchor from 'react-scrollchor';

export default class App extends React.Component {
  render() {
    return (
      <header className="headerShell" id="headerShell">
          <Scrollchor to="#projectsSection" animate={{offset: 0, duration: 800}}>Projects</Scrollchor>
          <Scrollchor to="#contactSection" animate={{offset: 0, duration: 800}}>Contact Me</Scrollchor>
      </header>
    );
  }
}