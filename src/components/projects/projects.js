import React from 'react';
import './projects.css'
import ProjectDetails from '../projectDetails/projectDetails';

export default class Projects extends React.Component{
  constructor(){
    super()
    this.state = {
      title: [
              'Baker & Spice',
              'Backcountry',
              'Mixology',
              'Ultimate Trivia',
              'Beers?'
            ],
      image: [
              './baker_spice.jpg',
              './backcountry.png',
              './mixology.png',
              './ultimate_trivia.jpg',
              './beers.png'
            ],
      link: [
              'https://baker-and-spice.netlify.com/',
              'https://protected-beach-53100.herokuapp.com/',
              'https://mixology-drink-recipes.netlify.com/',
              'https://katiewest820.github.io/trivia_game/',
              'https://katiewest820.github.io/beers_brewery_search/#'
            ],
      about: [
              'Baker & Spice is a recipe building app that provides bakers with the tools they need to easily create new recipes and organize their kitchen.',
              'Backcountry is a useful organization and collaboration app for backpackers who are planning a hiking trip and want a space to organize their trip details and collaborate with others.',
              'Mixology is an app that returns drink recipes based on a drink name or ingredient search.',
              'Ultimate Trivia is a fun and easy to use game app that asks trivia questions based on various category and difficulty levels that the player chooses.',
              'Beers? is an app that returns brewery and pub search results based on your location and preferred beer type. '
            ],
      tech: [
              'HTML5, CSS3, Javascript, React, Redux, React Router, Redux Form, Redux Thunk, MongoDB, Mongoose, Node.js, Express, Travis CI, Enzyme, Jest, Mocha, Chai',
              'HTML5, CSS3 Handlebars, Javascript, jQuery, MongoDB, Mongoose, Node.js Express, Travis CI, Mocha, Chai, Google Maps API',
              'HTML5, CSS3, Javascript, React, Travis CI, Enzyme, Jest, Coctail DB API',
              'HTML5, CSS3, Javascript, jQuery, Open Trivia DB API',
              'HTML5, CSS3, Javascript, jQuery, Google Places API.'
            ],
      learned: [
              'While building this app I really grew in my React and Redux knowledge. After completing this project, I feel confident and excited to use React. ' +
              'I also enjoyed implementing React Router, Redux Form, Redux Thunk and a variety of React animation libraries.',
              'In building this project I grew in my comfort of building servers and databases, completing unit testing and implementing maps in a project.',
              'My goal in building this app was to create a React app without Redux because I wanted to be comfortable managing state both ways.' +
              'This project helped me grow more comfortable with React concepts and gave me a better sense of how to efficiently structure components.',
              'I am a trivia fanatic so it was fun to build a simple game that I would use myself. ' +
              'It was also fun to play around with CSS transitions and grow more comfortable with AJAX, Javascript and jQuery',
              'This project was really fun to build and I learned so much throughout the process. My understanding of javascript grew significantly and ' +
              'I became much more comfortable designing and wireframing a project from scratch, reading API documentation and making AJAX calls.'
            ]
    }
  }
  render(){
    return (
      <div id="projects" className="projectsSection">
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