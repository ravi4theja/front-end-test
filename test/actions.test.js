//import fetch from 'isomorphic-fetch';
import sinon from 'sinon';
import { expect } from 'code';
// import fetchMock from 'fetch-mock';
import * as axiosUtils from '../src/utils/axiosUtils';
import * as actionTypes from '../src/actions/action-types';

import * as actions from '../src/actions';


it('`fetchPizzas` action creator should call the `getPizzas` function', async () => {
  const myStub = sinon.stub(axiosUtils, 'getPizzas').resolves({});
  await actions.fetchPizzas();
  expect(myStub.calledOnce).to.be.true();
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