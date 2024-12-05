import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ProjectShowcase.css';
import newspaperapp from '../assets/images/newspaperapp.jpg';
import ecommerce from '../assets/images/ecommerce.jpg';
import graphicdesign from '../assets/images/graphicdesign.jpg';




const projects = [
  {
    title: 'News App',
    description: 'I developed a news app allowing users to check desired news',
    bio: 'I created a news app that enables users to easily access and check the news they are most interested in',
    image: newspaperapp,
    link: '',
  },
  {
    title: 'E-Commerce Website',
    description: 'I built an e-commerce website for easy online shopping and transactions',
    bio: 'I developed an e-commerce website that provides a seamless shopping experience.',
    image: ecommerce,
    link: '',
  },
  {
    title: 'Design',
    description: 'Created visually appealing designs that communicate messages effectively and creatively',
    bio: 'Passionate graphic designer crafting unique, impactful designs for diverse projects.',
    image: graphicdesign,
    link: '', 
  },
 
];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Project Showcase</h1>
        <p className="lead">Explore my selected works, showcasing my skills and experience across different projects.</p>
      </header>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="text-muted small mb-4">{project.bio}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => openModal(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="projectModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h5 className="modal-title" id="projectModalLabel">{selectedProject.title}</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img src={selectedProject.image} className="img-fluid modal-image" alt={selectedProject.title} />
                  </div>
                  <div className="col-md-6">
                    <h5>Description</h5>
                    <p>{selectedProject.description}</p>
                    <h5>Bio</h5>
                    <p>{selectedProject.bio}</p>
                    {selectedProject.link && selectedProject.link.trim() !== '' && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                        View Project Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
