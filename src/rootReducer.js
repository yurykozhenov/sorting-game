import { combineReducers } from 'redux';

import sortingGameReducer from './sortingGame/sortingGameReducer';

const rootReducer = combineReducers({
  sortingGame: sortingGameReducer,
});

export default rootReducer;
