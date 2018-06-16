import React from 'react';

import './Session.css';

export default function Session({ initSortingGame }) {
  return (
    <div className="session-layout">
      <button className="session-button" onClick={initSortingGame}>
        Start new game
      </button>
    </div>
  );
}
