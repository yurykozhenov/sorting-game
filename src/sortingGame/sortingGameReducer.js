import {
  INIT_SORTING_GAME,
  RESUME_SORTING_GAME,
  SAVE_ORDER,
} from './sortingGameActions';

const initialState = { numbers: [] };

const sortingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SORTING_GAME:
    case RESUME_SORTING_GAME:
    case SAVE_ORDER:
      return { ...state, numbers: action.numbers };
    default:
      return state;
  }
};

export default sortingGameReducer;
