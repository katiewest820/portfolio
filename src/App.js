import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

