import axios from 'axios';
import store from './store';
import * as actions from './store/actions/auth.actions';

axios.defaults.baseURL = 'http://localhost:8002/api';
const token = localStorage.getItem('access_token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(actions.logout());
    }
    return Promise.reject(error);
  },
);

export default axios;
