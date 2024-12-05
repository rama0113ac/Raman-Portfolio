import React, { useState } from 'react';
import './PortfolioOverview.css';
import AstropicImage from '../assets/images/Astropic.PNG';
import contactbook from '../assets/images/contactbook.PNG';
import remote from '../assets/images/remote.PNG';



const categories = [
  {
    title: 'Web Design',
    description: 'A glimpse into my web design projects, focusing on user experience and responsive layouts.',
  },
  {
    title: 'Branding & Identity',
    description: 'Explore branding concepts and identity designs created to communicate a unique message for clients.',
  },
  {
    title: 'Photography',
    description: 'Capturing moments with a creative lens, focusing on storytelling, composition, emotion, and detail.',
  },
];

const projects = [
  {
    image: AstropicImage,
    title: 'Astronomy Project',
    description: 'This website showcases the astronomy picture of the day, along with stories that explore the details behind it.',
    details: 'This project showcases daily astronomy images, offering a captivating look into the universe. Each image is accompanied by detailed explanations, helping users explore celestial phenomena. The focus is on making complex astronomical concepts accessible to everyone.',
  },
  {
    image: contactbook,
    title: 'Contact Book',
    description: 'In this, users can store and save their contacts securely.',
    details: 'In this contact book, users can easily store and organize their contacts. It allows them to securely save details, search contacts quickly, and manage them efficiently. This tool helps keep all important contact information accessible and well-organized for future reference.',
  },
  {
    image: remote,
    title: 'Remote Design',
    description: 'Created a remote interactive website to sync teams across locations',
    details: 'I created a remote interactive website that keeps teams in sync, ensuring seamless collaboration and communication regardless of location',
  },
];

const PortfolioOverview = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-overview">
      <header className="portfolio-header text-center bg-dark text-white py-5">
        <h1 className='overview-title'>Portfolio Overview</h1>
        <p>Explore my work across different categories, showcasing my expertise in various fields.</p>
      </header>

      <section className="category-section container my-5">
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="category-card p-4 border rounded shadow-sm">
                <h2>{category.title}</h2>
                <p className="text-white">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="key-projects container my-5">
        <h2 className="text-center mb-4">Key Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4" onClick={() => handleCardClick(project)}>
              <div className="project-card border rounded shadow-sm">
                <img src={project.image} alt={project.title} className="img-fluid rounded-top" />
                <div className="project-details p-4">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section text-center py-5 text-white">
        <p>Interested in collaborating or learning more?<br></br> <a href="/contact" className="btn btn-primary mt-4">Get in touch!</a></p>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content container p-4" onClick={(e) => e.stopPropagation()}>
            <div className="row">
              <div className="col-md-6">
                <h2>{selectedProject.title}</h2>
                <div className="line-divider my-3"></div>
                <p>{selectedProject.description}</p>
                <div className="line-divider my-3"></div>
                <p>{selectedProject.details}</p>
              </div>
              <div className="col-md-6">
                <img src={selectedProject.image} alt={selectedProject.title} className="img-fluid rounded" />
              </div>
            </div>
            <button className="btn btn-secondary mt-4" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioOverview;
