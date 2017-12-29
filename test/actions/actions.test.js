import 'isomorphic-fetch';
import sinon from 'sinon';
import { expect } from 'code';
import fetchMock from 'fetch-mock';
import actionTypes from '../../src/actions/action-types';

import * as actions from '../../src/actions';

const mockData = {pizzas: ['Chicken', 'Pepperoni']}

describe('when the `fetchPizzas` action creator is triggered', () => {

  beforeEach(() => {
    fetchMock.mock('../../pizza.json', mockData);
  })

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  it('should get data from the correct url when `fetchPizzas` action creator is triggered', async () => {   
    await actions.fetchPizzas();
    expect(fetchMock.called('../../pizza.json')).to.be.true();   
  })
  
  it('should create an action of fetching pizzas', async () => {
    const expectedAction = {type: actionTypes.FETCH_PIZZAS, payload: mockData.pizzas}; 
    const actualMockedAction = await actions.fetchPizzas();
    expect(actualMockedAction).to.equal(expectedAction);
  })
})

it('should create an action to filter pizzas', () => {
  const mockFilterTerm = 's';
  const expectedAction = {
    type: actionTypes.FILTER_PIZZAS,
    payload: mockFilterTerm
  }
  expect(actions.filterPizzas(mockFilterTerm)).to.equal(expectedAction)
})

it('should create an action to sort the pizzas shown on the web page', () => {
  const expectedAction = {
    type: actionTypes.SORT_PIZZAS,
    payload: true
  }
  expect(actions.sortPizzas({sort: true, reverse: true})).to.equal(expectedAction);
})