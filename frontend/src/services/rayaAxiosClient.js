/* eslint-disable no-undef */
import axios from 'axios';
import Constants from 'Constants';

const instance = axios.create({
  baseURL: Constants.RAYA_BACKEND_HOSTNAME,
  timeout: 5000,
  headers: { 'X-Raya-Token': localStorage.getItem('X-Raya-Token') },
});

export default instance;
