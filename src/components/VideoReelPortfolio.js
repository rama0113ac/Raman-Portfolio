import React, { useState } from "react";
import './VideoReelPortfolio.css';
import Projectscomponent from './Projects';
import { Link } from 'react-router-dom';
import AstropicImage from '../assets/images/Astropic.PNG';
import animalcreation from '../assets/images/animalcreation.jpg';
import loopstudio from '../assets/images/loopstudio.jpeg';
const projects = [
  {
    id: 1,
    title: "loopstudio",
    description: "Created LoopStudio website, showcasing a gallery of images.",
    buttonText: "ZOOM IN",
    image: loopstudio,
  },
  {
    id: 2,
    title: "Animal Creation",
    description: "Created a unique animal creation using a cat face and a bird.",
    buttonText: "ZOOM IN",
    image: animalcreation,
  },
  {
    id: 3,
    title: "Astronomy Picture ",
    description: "This website displays the astronomy picture of the day with stories..",
    buttonText: "ZOOM IN",
    image:AstropicImage,
  }
];

const VideoReelPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="video-reel-portfolio">
      <section className="scene home">
        <div className="content">
          <h1 className="title">Welcome to My Video Reel Portfolio</h1>
          <p className="description ">Here’s a glimpse into my creative journey and the work I do. Let’s dive in!</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      <section className="scene category">
        <div className="content">
          <h2 className="title text-white">My Portfolio Categories</h2>
          <p className="description">Explore the different categories of work I specialize in:</p>
          <ul className="categories-list">
            <li>Web Design</li>
            <li>Branding</li>
            <li>Photography</li>
          </ul>
        </div>
      </section>

      <section className="scene process">
        <div className="content">
          <h2 className="title text-white">My Process</h2>
          <p className="description">I take a collaborative approach to every project, ensuring that the final product aligns with the client's vision and needs.</p>
          <div className="process-steps">
            <div className="step">
              <h3>Step 1: Discovery</h3>
              <p>Understanding client goals and project scope.</p>
            </div>
            <div className="step">
              <h3>Step 2: Design</h3>
              <p>Creating prototypes and design concepts.</p>
            </div>
            <div className="step">
              <h3>Step 3: Development</h3>
              <p>Building and refining the final product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scene final">
        <div className="content">
          <h2 className="title text-white">Final Presentation</h2>
          <p className="description">Take a look at some of my completed projects that showcase my skills and expertise.</p>
          <div className="projects">
            {projects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
         
                <button className="cta-btn">{project.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Projectscomponent/>

      <section className="scene contact">
        <div className="content">
          <h2 className="title">Contact Me</h2>
          <p className="description">Feel free to reach out to discuss potential collaborations or just to say hello.</p>
        
         
          <button className="cta-btn">  <Link to="/contact" >Get In Touch</Link></button>
          <div className="email-info">
            <p>Email: myemail@example.com</p>
          </div>
        </div>
      </section>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button className="close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-image img-fluid" 
              />
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoReelPortfolio;
