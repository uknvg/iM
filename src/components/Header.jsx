import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../design/Header.css';

const Header = () => {
  const navigate = useNavigate(); 

  const handleDashboardClick = () => { 
    navigate('/dashboard'); 
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#features">Features</a></li>
          <li className="nav-item"><a href="#contact">Contact us</a></li>
          <li className="nav-item"><a href="#docs">Docs</a></li>
        </ul>
      </nav>
      <button className='lwd' onClick={handleDashboardClick}>
        Dashboard
      </button>
    </header>
  );
};

export default Header;
