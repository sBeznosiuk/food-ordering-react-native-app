import axios from 'axios';

export const httpApi = axios.create({
  baseURL: 'https://rn-food-delivery.herokuapp.com/api/',
});

export const deleteAuthHeader = () =>
  delete httpApi.defaults.headers.common.Authorization;

export const addAuthHeader = (key: string | null) => {
  if (key) {
    httpApi.defaults.headers.common.Authorization = `Bearer ${key}`;
  }
};
