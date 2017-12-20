import { combineReducers } from 'redux';
import PizzaListReducer from './pizza-list.reducer';

const rootReducer = combineReducers({
  pizzas: PizzaListReducer
});

export default rootReducer;