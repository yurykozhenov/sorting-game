import {
  CREATE_SESSION,
  DESTROY_SESSION,
  SESSION_ID_STORAGE_KEY,
} from './sessionActions';

const sessionId = JSON.parse(localStorage.getItem(SESSION_ID_STORAGE_KEY));
const initialState = { sessionId };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return { ...state, sessionId: action.sessionId };
    case DESTROY_SESSION:
      return { ...state, sessionId: null };
    default:
      return state;
  }
};

export default sessionReducer;
