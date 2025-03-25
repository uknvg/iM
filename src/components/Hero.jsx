import React from 'react';
import '../design/Hero.css';
 
const Hero = () => {
  return (
    <div className='hero'>
      <h1>iM BOT</h1>
      <p>
        iM is a powerful protection bot designed specifically <br />
        <span>to safeguard Discord servers from various</span>
      </p>
      <button>Invite iM</button>
      <div className='security'>
        <h1>
          <i className='bx bxs-shield-plus sheild'></i>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
