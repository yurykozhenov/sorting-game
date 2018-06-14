import SortingGameApi from './sortingGameApi';

export const SESSION_ID_STORAGE_KEY = 'sessionId';

export const INIT_SORTING_GAME = 'INIT_SORTING_GAME';

export const initSortingGame = () => async dispatch => {
  const { array, id } = await SortingGameApi.create();

  localStorage.setItem(SESSION_ID_STORAGE_KEY, id);

  dispatch({ type: INIT_SORTING_GAME, numbers: array, sessionId: id });
};

export const RESUME_SORTING_GAME = 'RESUME_SORTING_GAME';

export const resumeSortingGame = () => async dispatch => {
  const sessionId = localStorage.getItem(SESSION_ID_STORAGE_KEY);
  const { array } = await SortingGameApi.get(sessionId);
  const gameState = await SortingGameApi.check(sessionId);

  dispatch({
    type: RESUME_SORTING_GAME,
    numbers: array,
    sessionId,
    isSorted: gameState.is_sorted,
  });
};

export const SAVE_ORDER = 'SAVE_ORDER';

export const saveOrder = numbers => async (dispatch, getState) => {
  const sessionId = getState().sortingGame.sessionId;
  await SortingGameApi.update(sessionId, numbers);
  const gameState = await SortingGameApi.check(sessionId);

  dispatch({ type: SAVE_ORDER, numbers, isSorted: gameState.is_sorted });
};

export const EXIT_GAME = 'EXIT_GAME';

export const exitGame = () => {
  localStorage.removeItem(SESSION_ID_STORAGE_KEY);

  return { type: EXIT_GAME };
};
