import React from 'react';
import './Projects.css'; 
import contactImage from '../assets/contact/contact4.jpeg';
import animalcreation from '../assets/images/animalcreation1.jpg';

const projects = [
  {
    title: 'Web pages designs',
    description: 'Recently, I created this contacts page for users, enabling them to integrate it into different websites for easy use.',
    imageUrl: contactImage,
    projectLink: '/project/4',
  },

  {
    title: 'Animal creation',
    description: 'Here are some samples showcasing my animal creation skills, emphasizing my creativity and attention to detail in each piece',
    imageUrl: animalcreation,
    projectLink: '/project/5',
  },
  {
    title: 'Photography',
    description: 'Here are some samples showcasing my photography skills, highlighting my ability to capture moments with creativity and precision.',
    imageUrl: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/00d59d3f-df33-4dfe-963d-59749d3be853_rw_1200.jpg?h=147acd3182a4279b01881ae96784ed3c',
    projectLink: '/project/3',
  },
];


const Projects = () => {
  return (
    <section className="projects-section container my-5">
      <h2 className="projects-title text-white" >Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <a href={project.projectLink} className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
