import axios from 'axios'; // eslint-disable-line no-unused-vars

// TODO: Change when backend is implemented
const API_URL = '/api'; // eslint-disable-line no-unused-vars

class SortingGameApi {
  static async create(sessionId, numbers) {
    // TODO: Uncomment when backend is implemented
    // return axios.post(`${API_URL}/games`, { sessionId, numbers });
    localStorage.setItem(sessionId, JSON.stringify(numbers));
  }

  static async get(sessionId) {
    // TODO: Uncomment when backend is implemented
    // return (await axios.get(`${API_URL}/games/${sessionId}`)).data;
    const numbers = JSON.parse(localStorage.getItem(sessionId));

    return { sessionId, numbers };
  }

  static async update(sessionId, numbers) {
    // TODO: Uncomment when backend is implemented
    // return axios.patch(`${API_URL}/games/${sessionId}`, { numbers });
    localStorage.setItem(sessionId, JSON.stringify(numbers));
  }
}

export default SortingGameApi;
