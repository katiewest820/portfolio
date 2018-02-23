import React from 'react';
import './projects.css'

import ProjectDetails from '../projectDetails/projectDetails';

export default class Projects extends React.Component{
  constructor(){
    super()
    this.state = {
      image: [
              './mixology.png', 
              './backcountry.png',
              './baker_spice.jpg'
            ],
      link: [
              'https://mixology-drink-recipes.netlify.com/', 
              'https://protected-beach-53100.herokuapp.com/',
              'https://baker-and-spice.netlify.com/'
            ],
      about: [
              'mixology about about about', 
              'backcountry about about about',
              'baker_spice about about about'
            ],
      tech: [
              'mixology tech tech tech', 
              'backcountry tech tech tech',
              'baker_spice tech tech tech'
            ],
      learned: [
                'mixology learned learned learned', 
                'mixology learned learned learned',
                'baker_spice learned learned learned'
              ]
    }
  }
  render(){
    return (
      <div className="projectsSection">
        <div className="aboutHeader">
          <span></span>
          <h3>Portfolio</h3>
          <span></span>
        </div>
        <div className="allProjectsContainer">
          <ProjectDetails 
            image={this.state.image[0]} 
            link={this.state.link[0]}
            about={this.state.about[0]}
            tech={this.state.tech[0]}
            learned={this.state.learned[0]}
            />
          <ProjectDetails 
            image={this.state.image[1]} 
            link={this.state.link[1]}
            about={this.state.about[1]}
            tech={this.state.tech[1]}
            learned={this.state.learned[1]}
          />
          <ProjectDetails 
            image={this.state.image[2]} 
            link={this.state.link[2]}
            about={this.state.about[2]}
            tech={this.state.tech[2]}
            learned={this.state.learned[2]}
          />
        </div>
      </div>
    );
  }
}