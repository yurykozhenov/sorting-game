import React from 'react';

import './Session.css';

const Session = ({ initSortingGame }) => (
  <div className="session-layout">
    <button className="session-button" onClick={initSortingGame}>
      Start new game
    </button>
  </div>
);

export default Session;
