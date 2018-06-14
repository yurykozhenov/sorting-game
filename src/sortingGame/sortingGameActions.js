import random from 'lodash/random';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

import { markSessionAsNotNew } from '../session/sessionActions';

import SortingGameApi from './sortingGameApi';

export const INIT_SORTING_GAME = 'INIT_SORTING_GAME';

const AVAILABLE_NUMBERS = range(1, 101);

export const initSortingGame = () => async (dispatch, getState) => {
  const arrayLength = random(10, 30);
  const numbers = shuffle(AVAILABLE_NUMBERS).slice(0, arrayLength);

  const sessionId = getState().session.sessionId;
  await SortingGameApi.create(sessionId, numbers);

  dispatch({ type: INIT_SORTING_GAME, numbers });
  dispatch(markSessionAsNotNew());
};

export const RESUME_SORTING_GAME = 'RESUME_SORTING_GAME';

export const resumeSortingGame = () => async (dispatch, getState) => {
  const sessionId = getState().session.sessionId;
  const game = await SortingGameApi.get(sessionId);

  dispatch({ type: RESUME_SORTING_GAME, numbers: game.numbers });
};

export const SAVE_ORDER = 'SAVE_ORDER';

export const saveOrder = numbers => async (dispatch, getState) => {
  const sessionId = getState().session.sessionId;
  await SortingGameApi.update(sessionId, numbers);

  dispatch({ type: SAVE_ORDER, numbers });
};
