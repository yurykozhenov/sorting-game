import axios from 'axios';

const API_URL = 'https://peaceful-shelf-64760.herokuapp.com';

class SortingGameApi {
  static async create() {
    return (await axios.post(`${API_URL}/games`)).data;
  }

  static async get(id) {
    return (await axios.get(`${API_URL}/games/${id}`)).data;
  }

  static async check(id) {
    return (await axios.get(`${API_URL}/games/${id}/check`)).data;
  }

  static async update(id, array) {
    return axios.patch(`${API_URL}/games`, { id, array });
  }
}

export default SortingGameApi;
