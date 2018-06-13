import React from 'react';

import './Session.css';

const Session = ({ createSession }) => (
  <div className="session-layout">
    <button className="session-button" onClick={createSession}>
      Start new game
    </button>
  </div>
);

export default Session;
