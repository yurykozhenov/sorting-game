import React from 'react';

import './SortingGame.css';
import SortingCanvas from '../SortingCanvas/SortingCanvas';

const SortingGame = ({ exitGame, numbers, moveItem, saveOrder, isSorted }) => (
  <div
    className="game-container"
    style={{ backgroundColor: isSorted ? 'lightgreen' : 'inherit' }}
  >
    <SortingCanvas
      numbers={numbers}
      moveItem={moveItem}
      saveOrder={saveOrder}
    />
    {isSorted && (
      <div className="victory-text">Congratulations! You won! :)</div>
    )}
    <div className="exit-button-container">
      <button className="exit-button" onClick={exitGame}>
        Exit game
      </button>
    </div>
  </div>
);

export default SortingGame;
