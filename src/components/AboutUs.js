import React from 'react';
import './AboutUs.css'; 

const teamMembers = [
    {
      name: 'RamanPreet Kaur',
      position: 'Web Developer',
      imageUrl: 'https://cdn.myportfolio.com/a262844f-ebaa-482b-95b8-fc34018706fc/10d96879-6bd0-4cee-82b5-f818f02bd4b6_rw_1920.jpg?h=ae6b32ab76c34ed840f0a5d8c919423f',
      bio: 'RamanPreet is a skilled web developer, passionate about building responsive, dynamic websites that provide a seamless user experience.',
    },
    {
      name: 'Smith',
      position: 'CTO & UX Expert',
      imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
      bio: 'Smith is our CTO and UX expert, with a focus on both the technical architecture and optimizing user experiences across all platforms.',
    },
    {
      name: ' Emily Wilson',
      position: 'Lead Graphic Designer',
      imageUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
      bio: 'Emily is the creative mind behind our visual identity, designing stunning graphics, branding, and layouts that captivate audiences.',
    },
    {
      name: 'Mark Davis',
      position: 'Web Developer & Graphic Designer',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      bio: 'Mark bridges the gap between design and development, creating both the aesthetic designs and the code that brings them to life.',
    },
];

const AboutUs = () => {
  return (
    <section className="about-us-section container mt-6 my-5">
      <header className="about-us-header text-center">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          We are a forward-thinking company that builds innovative solutions to solve real-world problems.
        </p>
      </header>

      <section className="about-us-team">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-member-image"
              />
              <div className="team-card-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-us-mission">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to empower individuals and businesses by delivering top-quality products and services that drive change.
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
