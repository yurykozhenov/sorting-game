import axios from 'axios';

axios.interceptors.request.use(config => ({
  ...config,
  url: `${process.env.REACT_APP_API_URL}${config.url}`,
}));
