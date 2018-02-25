import React from 'react';
import './projects.css'
import ProjectDetails from '../projectDetails/projectDetails';
export default class Projects extends React.Component{
  constructor(){
    super()
    this.state = {
      title: [
              'Mixology',
              'Backcountry',
              'Baker & Spice',
              'Ultimate Trivia',
              'Beers?'
            ],
      image: [
              './mixology.png', 
              './backcountry.png',
              './baker_spice.jpg',
              './ultimate_trivia.jpg',
              './beers.png'
            ],
      link: [
              'https://mixology-drink-recipes.netlify.com/', 
              'https://protected-beach-53100.herokuapp.com/',
              'https://baker-and-spice.netlify.com/',
              'https://katiewest820.github.io/trivia_game/',
              'https://katiewest820.github.io/beers_brewery_search/#'
            ],
      about: [
              'mixology about about about', 
              'backcountry about about about',
              'baker_spice about about about',
              'Ultimate Trivia about about about',
              'Beers about about about'
            ],
      tech: [
              'mixology tech tech tech', 
              'backcountry tech tech tech',
              'baker_spice tech tech tech',
              'Ultimate trivia tech tech tech',
              'Beers tech tech tech'
            ],
      learned: [
              'mixology learned learned learned',
              'mixology learned learned learned',
              'baker_spice learned learned learned',
              'Ultimate trivia learned learned learned',
              'Beers learned learned learned'
            ]
    }
  }
  render(){
    return (
      <div id="projectsSection" className="projectsSection">
        <div className="allProjectsContainer">
          <ProjectDetails 
            title={this.state.title[0]}
            image={this.state.image[0]} 
            link={this.state.link[0]}
            about={this.state.about[0]}
            tech={this.state.tech[0]}
            learned={this.state.learned[0]}
            />
          <ProjectDetails 
            title={this.state.title[1]}
            image={this.state.image[1]} 
            link={this.state.link[1]}
            about={this.state.about[1]}
            tech={this.state.tech[1]}
            learned={this.state.learned[1]}
          />
          <ProjectDetails 
            title={this.state.title[2]}
            image={this.state.image[2]} 
            link={this.state.link[2]}
            about={this.state.about[2]}
            tech={this.state.tech[2]}
            learned={this.state.learned[2]}
          />
          <ProjectDetails
            title={this.state.title[3]}
            image={this.state.image[3]}
            link={this.state.link[3]}
            about={this.state.about[3]}
            tech={this.state.tech[3]}
            learned={this.state.learned[3]}
          />
          <ProjectDetails
              title={this.state.title[4]}
              image={this.state.image[4]}
              link={this.state.link[4]}
              about={this.state.about[4]}
              tech={this.state.tech[4]}
              learned={this.state.learned[4]}
            />
        </div>
      </div>
    );
  }
}