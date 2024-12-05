import React from 'react';
import { useParams } from 'react-router-dom'; 
import './projectdetailpage.css';
import contactImage from '../assets/contact/contact4.jpeg';
import contactImage2 from '../assets/contact/contact2.jpeg';
import contactImage3 from '../assets/contact/contact3.jpeg';
import contactImage5 from '../assets/contact/contact5.jpeg';
import contactImage1 from '../assets/contact/contact1.jpeg';
import animalcreation from '../assets/images/animalcreation.jpg';
import loopstudio from '../assets/images/loopstudio.jpeg';

import animalcreation1 from '../assets/images/animalcreation1.jpg';
const projects = [
  {
    id: '1',
    title: 'Music',
    description: 'A personal portfolio website showcasing my skills and projects.',
    imageUrl: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/6304ca9e-7410-4c9d-80bd-5f2a9a465b60_rw_1200.jpg?h=fb74726bf4c8a453de76a4117110a349',
    imageUrl1: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/9817fb39-7b7a-4002-a1dd-41d646dde9be_rw_1200.jpg?h=5e354d97d7b1221a700499dd14cf3f49',
    imageUrl2: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/ecf4fa68-8c85-4052-8e67-cf3e1670873b_rw_1200.jpg?h=bf04b2e927fa07ffdefbd3f4d340b406',
    imageUrl3: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/64b93e62-d606-4150-89e1-7f6fb7c8981a_rw_1200.jpg?h=5e5cdcc6544ba44c7f6dc72c6318d484',
    imageUrl4: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/e41563ce-a03d-429e-8c79-22b49f1ef097_rw_1200.jpg?h=4361e94ae3808d3c04411827081a4fe8',
    imageUr5: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/b8fd4e2e-7a6a-40ba-bf91-d2b7815d6fcb_rw_1200.jpg?h=1bd231b39451a8f9b0f17d34dd9eac9a',
    projectLink: '/project/1',
  },
  {
    id: '2',
    title: 'Swimming',
    description: 'A weather forecasting app using React and OpenWeatherMap API.',
    imageUrl: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/f180d419-29a4-4e77-a04d-9a3a4f48f9cc_rw_1200.jpg?h=85957d80b25ddd135a881abec6610e9d',
    imageUrl1: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/39a02ebe-77ac-455f-84ec-026ffa81aaa6_rw_1200.jpg?h=51d0f807c3cc1997906d44315aa335c7',
    imageUrl2: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/00d0ad0d-f140-48c1-88ab-99a66a23c95b_rw_1200.jpg?h=efbbdf0ee2bfe71146c1c8400723eed1',
    imageUrl3: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/f37449f9-86cc-4c8b-b7dd-19910e9c590c_rw_1200.jpg?h=93dd693bcf894d80332e3dee3d1ff4b3',
    imageUrl4: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/99e33c1a-572d-498f-851a-416d2bd04079_rw_1200.jpg?h=4c22128426bc70992e0b2c1371c8bb3d',
    imageUr5: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/4ef62b40-98ca-4bf5-8fb5-95a57b5c22dc_rw_1200.jpg?h=02ef404a0ee34b82a835b6c001f8b12f',
    projectLink: '#',
  },
  {
    id: '3',
    title: 'Photography',
    description: 'Here are some samples showcasing my photography skills, highlighting my ability to capture moments with creativity and precision.',
    imageUrl: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/00d59d3f-df33-4dfe-963d-59749d3be853_rw_1200.jpg?h=147acd3182a4279b01881ae96784ed3c',
    imageUrl1: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/0d738223-4023-4797-a485-9afbd40891c6_rw_1200.jpg?h=8117e63cc77131bf1862de7ba9c5d0ed',
    imageUrl2: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/c2f0d0b6-b05d-49d4-b3ad-13e9c021256f_rw_1200.jpg?h=0c0853c64ecfd97441833ce0868bbef4',
    imageUrl3: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/fcfac2b9-699e-4c9f-8d41-9117f72b32fd_rw_1200.jpg?h=8fb1aaa39e8e09576bb696ddb4e67b1c',
    imageUrl4: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/1fefc6cb-7eda-4ac5-8e42-cce029b6e367_rw_1200.jpg?h=addf22e54d2237400c85152f5a22e570',
    imageUr5: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/8378bbe6-4679-4442-b741-b477477d167d_rw_1200.jpg?h=561756be2caa4b07dc32041a97c7e26b',
    projectLink: '#',
  },
  {
    id: '4',
    title: 'Contact pages',
    description: 'Recently, I created this contacts page for users, enabling them to integrate it into different websites for easy use.',
    imageUrl: contactImage1,
    imageUrl1: contactImage2,
    imageUrl2: contactImage3,
    imageUrl3: contactImage,
    imageUrl4: contactImage5,
    projectLink: '/project/4',
  },
  {
    id: '5',
    title: 'Animal creation',
    description: 'Here are some samples showcasing my animal creation skills, emphasizing my creativity and attention to detail in each piece. ',
    imageUrl: animalcreation1,
    imageUrl1: animalcreation,
    projectLink: '/project/5',
  },
  {
    id: '6',
    title: 'Loopstudio',
    description: 'Created loopstudio website .',
    imageUrl: loopstudio,
    projectLink: '/project/6',
  },

];

const Projectdetailpage = () => {
  const { id } = useParams(); 
  
  const project = projects.find(project => project.id === id);

  if (!project) {
    return <p>Project not found!</p>; 
  }

 
  const renderImage = (imageUrl) => {
    if (imageUrl) {
      return <img src={imageUrl} alt={project.title} className="project-image" />;
    }
    return null; 
  };

  return (
    <div>
      <section className="project-detail-section container mt-6 my-5">
        <h1 className="project-title text-white">{project.title}</h1>
        <p className="project-description text-white mb-4">{project.description}</p>


        <div className="image-grid mt-4 text-white">
          <div className="grid-item">
            {renderImage(project.imageUrl)}
          </div>
          <div className="grid-item">
            {renderImage(project.imageUrl1)}
          </div>
          <div className="grid-item">
            {renderImage(project.imageUrl2)}
          </div>
          <div className="grid-item">
            {renderImage(project.imageUrl3)}
          </div>
          <div className="grid-item">
            {renderImage(project.imageUrl4)}
          </div>
          <div className="grid-item">
            {renderImage(project.imageUr5)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectdetailpage;
