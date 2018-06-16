import axios from 'axios';

export default class SortingGameApi {
  static async create() {
    return (await axios.post(`/games`)).data;
  }

  static async get(id) {
    return (await axios.get(`/games/${id}`)).data;
  }

  static async check(id) {
    return (await axios.get(`/games/${id}/check`)).data;
  }

  static async update(id, array) {
    return axios.patch(`/games`, { id, array });
  }
}
