import { combineReducers } from 'redux';

import sessionReducer from './session/sessionReducer';
import sortingGameReducer from './sortingGame/sortingGameReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  sortingGame: sortingGameReducer,
});

export default rootReducer;
