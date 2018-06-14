import React from 'react';

import './SortingGame.css';
import SortingCanvas from '../SortingCanvas/SortingCanvas';

const SortingGame = ({
  destroySession,
  numbers,
  moveItem,
  saveOrder,
  hasWon,
}) => (
  <div
    className="game-container"
    style={{ backgroundColor: hasWon ? 'lightgreen' : 'inherit' }}
  >
    <SortingCanvas
      numbers={numbers}
      moveItem={moveItem}
      saveOrder={saveOrder}
    />
    {hasWon && <div className="victory-text">Congratulations! You won! :)</div>}
    <div className="exit-button-container">
      <button className="exit-button" onClick={destroySession}>
        Exit game
      </button>
    </div>
  </div>
);

export default SortingGame;
