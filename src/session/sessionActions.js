import uuid from 'uuid/v4';

export const SESSION_ID_STORAGE_KEY = 'sessionId';

export const CREATE_SESSION = 'CREATE_SESSION';

export const createSession = () => {
  const sessionId = uuid();

  localStorage.setItem(SESSION_ID_STORAGE_KEY, JSON.stringify(sessionId));

  return {
    type: CREATE_SESSION,
    sessionId,
  };
};

export const DESTROY_SESSION = 'DESTROY_SESSION';

export const destroySession = () => {
  localStorage.removeItem(SESSION_ID_STORAGE_KEY);

  return { type: DESTROY_SESSION };
};

export const MARK_SESSION_AS_NOT_NEW = 'MARK_SESSION_AS_NOT_NEW';

export const markSessionAsNotNew = () => {
  return { type: MARK_SESSION_AS_NOT_NEW };
};
