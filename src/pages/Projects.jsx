import React from 'react';

import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <ul>
          <li>
            <img src="https://picsum.photos/id/1/100/100" alt="Imagem do Projeto 1" />
            <h3>Blogs API</h3>
            <p>
            I architected and developed a CRUD API for blog posts (with Sequelize and following REST principles).
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/id/2/100/100" alt="Imagem do Projeto 2" />
            <h3>Trybesmith</h3>
            <p>
            CRUD API using node.js, typescript and MySQL.
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/id/3/100/100" alt="Imagem do Projeto 3" />
            <h3>Spotify Clone</h3>
            <p>
            React application, using the Itunes API to play songs from the most varied bands and artists, create a list of favorite songs and edit the profile of the user logged in.
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/id/1/100/100" alt="Imagem do Projeto 3" />
            <h3>StarWars Search Planets</h3>
            <p>
            In this project, a list with filters of planets from the Star Wars universe was developed using Context API and Hooks to control global states.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Projects;