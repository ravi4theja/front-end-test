import 'isomorphic-fetch';
import actionTypes from './action-types';

const url = '../../pizza.json';

export const getPizzas = (url) => {
   return fetch(url)
         .then(res => res.json())
} 

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

