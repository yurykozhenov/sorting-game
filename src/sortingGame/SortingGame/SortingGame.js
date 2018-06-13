import React from 'react';

import './SortingGame.css';

const SortingGame = ({ destroySession, numbers }) => (
  <div>
    <div className="sorting-list">
      {numbers.map((number, index) => (
        <div className="sorting-item" key={index}>
          {number}
        </div>
      ))}
    </div>
    <button onClick={destroySession}>Exit game</button>
  </div>
);

export default SortingGame;
