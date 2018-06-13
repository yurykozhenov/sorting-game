import random from 'lodash/random';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

export const INIT_SORTING_GAME = 'INIT_SORTING_GAME';

const AVAILABLE_NUMBERS = range(1, 101);

export const initSortingGame = () => {
  // TODO: Send new game to backend (or get it from backend if it's generated there)
  const arrayLength = random(10, 30);
  const numbers = shuffle(AVAILABLE_NUMBERS).slice(0, arrayLength);

  return { type: INIT_SORTING_GAME, numbers };
};

export const RESUME_SORTING_GAME = 'RESUME_SORTING_GAME';

export const resumeSortingGame = () => {
  // TODO: Fetch from backend
  const gameState = {};

  return { type: RESUME_SORTING_GAME, gameState };
};

export const MOVE_ITEM = 'MOVE_ITEM';

// TODO: Maybe move to local state since it's related to UI representation only
// If moveItem is removed, update numbers on SAVE_ORDER action
export const moveItem = (number, targetIndex) => ({
  type: MOVE_ITEM,
  number,
  targetIndex,
});

export const SAVE_ORDER = 'SAVE_ORDER';

export const saveOrder = numbers => {
  // TODO: Send to backend

  return {
    type: SAVE_ORDER,
    numbers,
  };
};
