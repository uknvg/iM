import React from 'react';
import '../design/Features.css';

const Features = () => {
  return (
    <div className='bot-features #features'>
      <h2 className='features-title'>iM Bot Features</h2>
      
      <div className='features-container'>
        <div className='feature-item'>
          <h3>Spam Protection</h3>
          <p>Automatically detects and blocks spam messages to ensure your server remains clean and free of disruptive content.</p>
        </div>
        <div className='feature-item'>
          <h3>Anti-Raid</h3>
          <p>Prevents mass raids and protects your server from sudden influxes of unwanted users, keeping your community safe.</p>
        </div>
        <div className='feature-item'>
          <h3>Customizable Commands</h3>
          <p>Customize the bot’s commands to suit your server’s specific needs, allowing for personalized interactions with members.</p>
        </div>
      </div>

      <div className='features-container'>
        <div className='feature-item'>
          <h3>Role Management</h3>
          <p>Manage user roles and permissions with ease, maintaining order and control across the server with flexibility.</p>
        </div>
        <div className='feature-item'>
          <h3>Auto Moderation</h3>
          <p>Automatically filters inappropriate content and helps enforce rules within your server to ensure a safe environment.</p>
        </div>
        <div className='feature-item'>
          <h3>Activity Logging</h3>
          <p>Track and log all server activities, providing detailed insights for better monitoring and enhanced security.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
