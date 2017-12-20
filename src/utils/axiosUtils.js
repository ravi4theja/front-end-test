import axios from 'axios';

export const getPizzas = (url) => {
  return axios.get(url)
        .then(res => res.data)
}