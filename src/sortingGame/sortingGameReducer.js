import update from 'immutability-helper';

import {
  INIT_SORTING_GAME,
  MOVE_ITEM,
  RESUME_SORTING_GAME,
} from './sortingGameActions';

const initialState = { numbers: [] };

const sortingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SORTING_GAME:
      return { ...state, numbers: action.numbers };
    case RESUME_SORTING_GAME:
      return { ...state, ...action.gameState };
    case MOVE_ITEM:
      return update(state, {
        numbers: {
          $splice: [
            [
              state.numbers.findIndex(
                originalNumber => originalNumber === action.number,
              ),
              1,
            ],
            [action.targetIndex, 0, action.number],
          ],
        },
      });
    default:
      return state;
  }
};

export default sortingGameReducer;
