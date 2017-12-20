import fetch from 'isomorphic-fetch';
import axios from 'axios';


// import { store } from '../index';

import { getPizzas } from '../utils/axiosUtils';
import * as actionTypes from './action-types';

const url = '../../pizza.json';


/* export const getPizzas = (url) => {
   return axios.get(url)
         .then(res => res.data)
}  */

export const fetchPizzas = async () => {
  const data = await getPizzas(url);
  return {
    type: actionTypes.FETCH_PIZZAS,
    payload: data.pizzas
  }
}

export const filterPizzas = (filterTerm) => {
  return {
    type: actionTypes.FILTER_PIZZAS,
    payload: filterTerm
  }
}

export const sortPizzas = (sortObj) => {
  return {
    type: actionTypes.SORT_PIZZAS,
    payload: sortObj.reverse
  }
}

