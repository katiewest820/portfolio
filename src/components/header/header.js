import React from 'react';
import './header.css';

export default class App extends React.Component {
  render() {
    return (
      <header className="headerShell">
        <h2>Home</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </header>
    );
  }
}