import { INIT_SORTING_GAME, RESUME_SORTING_GAME } from './sortingGameActions';

const initialState = { numbers: [] };

const sortingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SORTING_GAME:
      return { ...state, numbers: action.numbers };
    case RESUME_SORTING_GAME:
      return { ...state, ...action.gameState };
    default:
      return state;
  }
};

export default sortingGameReducer;
