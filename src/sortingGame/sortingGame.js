import SortingGameApi from './sortingGameApi';

const SESSION_ID_STORAGE_KEY = 'sessionId';

const sortingGame = {
  state: {
    sessionId: localStorage.getItem(SESSION_ID_STORAGE_KEY),
    numbers: [],
    isSorted: false,
  },
  reducers: {
    createGame: (state, payload) => ({
      ...state,
      numbers: payload.numbers,
      sessionId: payload.sessionId,
      isSorted: payload.isSorted,
    }),
    updateNumbers: (state, payload) => ({
      ...state,
      numbers: payload.numbers,
      isSorted: payload.isSorted,
    }),
    removeGame: state => ({ ...state, numbers: null, sessionId: null }),
  },
  effects: dispatch => ({
    async initSortingGame() {
      const { array: numbers, id: sessionId } = await SortingGameApi.create();

      localStorage.setItem(SESSION_ID_STORAGE_KEY, sessionId);

      dispatch.sortingGame.createGame({ numbers, sessionId, isSorted: false });
    },
    async resumeSortingGame() {
      const sessionId = localStorage.getItem(SESSION_ID_STORAGE_KEY);
      const { array: numbers } = await SortingGameApi.get(sessionId);
      const { is_sorted: isSorted } = await SortingGameApi.check(sessionId);

      dispatch.sortingGame.createGame({
        numbers,
        sessionId,
        isSorted,
      });
    },
    async saveOrder({ numbers }, rootState) {
      const sessionId = rootState.sortingGame.sessionId;
      await SortingGameApi.update(sessionId, numbers);
      const { is_sorted: isSorted } = await SortingGameApi.check(sessionId);

      dispatch.sortingGame.updateNumbers({ numbers, isSorted });
    },
    exitGame() {
      localStorage.removeItem(SESSION_ID_STORAGE_KEY);

      dispatch.sortingGame.removeGame();
    },
  }),
};

export default sortingGame;
