import * as actionTypes from '../actions/action-types';

let absolutePizzaList;

export default (state=[], action) => {
  switch(action.type) {
    case actionTypes.FETCH_PIZZAS: {
      absolutePizzaList = action.payload;
      return action.payload;
    }
    case actionTypes.FILTER_PIZZAS: {
      return absolutePizzaList.filter(pizza => {
        return (pizza.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
      })
    }
    case actionTypes.SORT_PIZZAS: {
      const reverseSort = (a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0
      }
      return action.payload? state.sort(reverseSort): state.sort();
    }
    default: {
      return state;
    }
  }
}