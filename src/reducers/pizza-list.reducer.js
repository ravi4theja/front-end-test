import actionTypes from '../actions/action-types';

let absolutePizzaList;

const fetchPizzas = (state, action) => {
  absolutePizzaList = action.payload;
  return action.payload;
}

const filterPizzas = (state, action) =>
  absolutePizzaList.filter(pizza => {
    return (pizza.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
  })

const sortPizzas = (state, action) => {
  const reverseSort = (a, b) => {
    if(a < b) return 1;
    if(a > b) return -1;
    return 0
  }
  return action.payload? [ ...state.sort(reverseSort) ]: [ ...state.sort() ];
}

export default (state = [], action) => {
  const actions = {
    [actionTypes.FETCH_PIZZAS]: fetchPizzas,
    [actionTypes.FILTER_PIZZAS]: filterPizzas,
    [actionTypes.SORT_PIZZAS]: sortPizzas
  }

  const reducer = actions[action.type];

  return reducer? reducer(state, action): state;

}
