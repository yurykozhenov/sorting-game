import {
  EXIT_GAME,
  INIT_SORTING_GAME,
  RESUME_SORTING_GAME,
  SAVE_ORDER,
  SESSION_ID_STORAGE_KEY,
} from './sortingGameActions';

const sessionId = localStorage.getItem(SESSION_ID_STORAGE_KEY);
const initialState = { sessionId, numbers: [], isSorted: false };

export default function sortingGameReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SORTING_GAME:
      return {
        ...state,
        numbers: action.numbers,
        sessionId: action.sessionId,
        isSorted: false,
      };
    case RESUME_SORTING_GAME:
      return {
        ...state,
        numbers: action.numbers,
        sessionId: action.sessionId,
        isSorted: action.isSorted,
      };
    case SAVE_ORDER:
      return { ...state, numbers: action.numbers, isSorted: action.isSorted };
    case EXIT_GAME:
      return { ...state, numbers: null, sessionId: null };
    default:
      return state;
  }
}
