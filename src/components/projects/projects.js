import React from 'react';
import './projects.css'
import ProjectDetails from '../projectDetails/projectDetails';

export default class Projects extends React.Component{
  constructor(){
    super();
    this.state = {
      title: [
              'Baker & Spice',
              'Backcountry',
              'Mixology',
              'Ultimate Trivia',
              'Beers?'
            ],
      image: [
              './baker_spice.png',
              './backcountry.png',
              './mixology.png',
              './trivia.png',
              './beers.png'
            ],
      link: [
              'https://baker-and-spice.netlify.com/',
              'https://protected-beach-53100.herokuapp.com/',
              'https://mixology-drink-recipes.netlify.com/',
              'https://katiewest820.github.io/trivia_game/',
              'https://katiewest820.github.io/beers_brewery_search/#'
            ],
      github: [
              'https://github.com/katiewest820/baker-and-spice-react',
              'https://github.com/katiewest820/hiking-app',
              'https://github.com/katiewest820/mixology',
              'https://github.com/katiewest820/trivia_game',
              'https://github.com/katiewest820/beers_brewery_search'
            ],
      about: [
              'Baker & Spice is a recipe building and organization app that provides bakers with the tools they need to easily create new recipes and organize their kitchen.',
              'Backcountry is a useful organization and collaboration app for backpackers who are planning a hiking trip and want a space to organize their trip details and collaborate with others.',
              'Mixology is an app that returns drink recipes based on a drink name or ingredient search.',
              'Ultimate Trivia is a fun and easy to use trivia app that asks a series of questions based on various category and difficulty levels that the player chooses.',
              'Beers? is an app that returns brewery and pub detail search results based on your location and preferred beer type. '
            ],
      tech: [
              'The front end of Baker & Spice was built using React, Redux, React Router, Redux Thunk, Javascript, HTML5, CSS3 and the forms fields were implemented using Redux Form. ' +
              'The responsive layout was implemented with CSS Grid. The Server was build with Node.js and Express.js and the database with MongoDB and Mongoose. Image uploading and storage was added using Cloudiary. ' +
              'Component, Action and Reducer testing was added using Enzyme and Jest, and server side testing was added using Mocha, Chai and Faker. ' +
              'Cors is used for cross origin sharing between the web and server. Travis CI was used for continuous integration and the front end is hosted on Netlify and the backend on Heroku.',
              'The front end of Backcountry was built using jQuery, Javascript, HTML5, Handlebars and CSS3. The server was built with Node.js and Express.js and the database with MongoDB and Mongoose. ' +
              'The responsive layout was implemented with CSS Grid. The maps were pulled in using the Google Maps API. ' +
              'Unit testing was completed using Mocha, Chai and Faker and Travis CI was used for continuous integration. This app is hosted on Heroku.',
              'Mixology was built using React, Javascript, HTML5 and CSS3. The responsive layout was implemented with CSS Grid. The API used for the drink data was the Coctail DB API. Component testing was completed using Enzyme and Jest. Travis CI is used for continuous integration and the site is hosted on Netlify.',
              'Ultimate Trivia was built using jQuery, Javascript, HTML5 and CSS3. The responsive layout was implemented with CSS Grid and the animations were added using CSS Transitions and Animate.CSS. The API used for the trivia data was the Open Trivia DB API',
              'Beers? was built using jQuery, Javascript, HTML5 and CSS3. The responsive layout was implemented with CSS Grid and Flexbox and the animations were added using Animate.CSS. The API used for the brewery search was the Google Places API.'
            ],
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
            github={this.state.github[0]}
            />
          <ProjectDetails 
            title={this.state.title[1]}
            image={this.state.image[1]} 
            link={this.state.link[1]}
            about={this.state.about[1]}
            tech={this.state.tech[1]}
            github={this.state.github[1]}
          />
          <ProjectDetails 
            title={this.state.title[2]}
            image={this.state.image[2]} 
            link={this.state.link[2]}
            about={this.state.about[2]}
            tech={this.state.tech[2]}
            github={this.state.github[2]}
          />
          <ProjectDetails
            title={this.state.title[3]}
            image={this.state.image[3]}
            link={this.state.link[3]}
            about={this.state.about[3]}
            tech={this.state.tech[3]}
            github={this.state.github[3]}
          />
          <ProjectDetails
              title={this.state.title[4]}
              image={this.state.image[4]}
              link={this.state.link[4]}
              about={this.state.about[4]}
              tech={this.state.tech[4]}
              github={this.state.github[4]}
            />
        </div>
      </div>
    );
  }
}