import { expect } from 'code';

import pizzaListReducer from '../src/reducers/pizza-list.reducer';
import * as actionTypes from '../src/actions/action-types';

describe('PizzaListReducer', () => {

  const mockPayload = ['Chicken', 'Pepperoni', 'Sausage', 'Pepperoni & Sausage'];

  it('should fetch all the pizzas', () => {
    expect(pizzaListReducer([], {type: actionTypes.FETCH_PIZZAS, payload: mockPayload}))
    .to.equal(mockPayload)
  })

  it('should filter all the pizzas', () => {
    const mockFilterTerm = 'sau';
    expect(pizzaListReducer(mockPayload, {type: actionTypes.FILTER_PIZZAS, payload: mockFilterTerm}))
    .to.equal(['Sausage', 'Pepperoni & Sausage'])
  })

  it('should sort the pizzas shown on the web page', () => {
    const mockReverse = true;
    expect(pizzaListReducer(mockPayload, {type: actionTypes.SORT_PIZZAS, payload: mockReverse}))
    .to.equal(['Sausage', 'Pepperoni & Sausage', 'Pepperoni', 'Chicken'])
  })
})