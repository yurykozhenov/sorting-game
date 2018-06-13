import React from 'react';

import './SortingGame.css';
import SortingCanvas from '../SortingCanvas/SortingCanvas';

const SortingGame = ({ destroySession, numbers, moveItem, saveOrder }) => (
  <div>
    <SortingCanvas
      numbers={numbers}
      moveItem={moveItem}
      saveOrder={saveOrder}
    />
    <div className="exit-button-container">
      <button className="exit-button" onClick={destroySession}>
        Exit game
      </button>
    </div>
  </div>
);

export default SortingGame;
