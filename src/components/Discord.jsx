import React from 'react';
import '../design/Server.css';

const Server = () => {
  return (
    <div className="server">
      {/* شعار الخادم */}
      <img src="https://via.placeholder.com/150" alt="Server Icon" className="server-icon" />

      {/* معلومات الخادم */}
      <div className="server-info">
        <h2>TEST Squadron <span className="verified-badge">✅</span></h2>
        <p>
          <span className="online-members">1,983 Online</span> • <span className="total-members">40,497 Members</span>
        </p>
      </div>

      {/* زر الانضمام */}
      <button className="join-button">Join</button>
    </div>
  );
};

export default Server;