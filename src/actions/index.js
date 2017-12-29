import 'isomorphic-fetch';
import actionTypes from './action-types';
import { getPizzas } from '../utils/pizza-list';

const pizzaListURL = '../../pizza.json';

export const fetchPizzas = async () => {
  const data = await getPizzas(pizzaListURL);
  return {
    type: actionTypes.FETCH_PIZZAS,
    payload: data.pizzas
  }
}

export const filterPizzas = filterTerm => (
  {
    type: actionTypes.FILTER_PIZZAS,
    payload: filterTerm
  }
)

export const sortPizzas = sortObj => (
  {
    type: actionTypes.SORT_PIZZAS,
    payload: sortObj.reverse
  }
)

