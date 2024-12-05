import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'; 
import Navbar from './components/Navbar';
import Contactpage from './pages/contactpage';
import Aboutpage from './pages/Aboutpage';
import './App.css';
import Projectpage from './pages/Projectpage';
import Projectdetailpage from './pages/Projectdetailpage';
import PortfolioOverviewPage from './pages/PortfolioOverviewpage';
import VideoReelPortfolio from './pages/VideoReelPortfolioPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/project" element={<Projectpage />} />
          <Route path="/project/:id" element={<Projectdetailpage />} />
          <Route path="/overview" element={<PortfolioOverviewPage />} />
          <Route path="/VideoReel" element={<VideoReelPortfolio />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
