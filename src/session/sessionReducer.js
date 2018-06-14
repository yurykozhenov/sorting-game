import {
  CREATE_SESSION,
  DESTROY_SESSION,
  MARK_SESSION_AS_NOT_NEW,
  SESSION_ID_STORAGE_KEY,
} from './sessionActions';

const sessionId = JSON.parse(localStorage.getItem(SESSION_ID_STORAGE_KEY));
const initialState = { sessionId };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return { ...state, sessionId: action.sessionId, isNewSession: true };
    case DESTROY_SESSION:
      return { ...state, sessionId: null };
    case MARK_SESSION_AS_NOT_NEW:
      return { ...state, isNewSession: false };
    default:
      return state;
  }
};

export default sessionReducer;
