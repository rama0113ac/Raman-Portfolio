import React from 'react';
import Hero from '../components/Hero'; // Import Hero component
import AboutMe from '../components/aboutme';
import Skills from '../components/Skills';
import PortfolioOverview from '../components/PortfolioOverview';
import ProjectShowcase from '../components/ProjectShowcase';
import VideoReelPortfolio from '../components/VideoReelPortfolio';


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe/>
      <Skills/>
      <PortfolioOverview/>
      <ProjectShowcase/>
      <VideoReelPortfolio/>
      
    </div>
  );
};

export default Home;
