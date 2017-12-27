import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'code';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ConnectedPizzaList, { PizzaList } from '../src/components/pizza-list';

describe('PizzaList', () => {

  let wrapper;
  const fetchPizzasStub = sinon.stub();
  const mockPizzas = ['chicken', 'pepperoni'];
  let mockProps = {
    fetchPizzas: fetchPizzasStub,
    pizzas : mockPizzas
  }

  beforeEach(() => {
    wrapper = shallow(<PizzaList { ...mockProps } />, {disableLifeCycleMethods: true});
  })

  afterEach(() => {
    
  })

  it('is being rendered', () => {
    expect(wrapper.exists()).to.be.true();
  })

  it('should render the text `Loading...` and no other elements before the pizza data is loaded', () => {
    mockProps.pizzas = [];
    wrapper = shallow(<PizzaList { ...mockProps } />, {disableLifeCycleMethods: true});
    expect(wrapper.equals(
      <div className='loading'>Loading...</div>
    )).to.be.true()


  })

  it('should call `fetchPizzas` once the component is mounted', () => {
    wrapper = shallow(<PizzaList { ...mockProps } />);
    expect(fetchPizzasStub.called).to.be.true();
  })

  it('should render pizzas if the props `pizzas` is not empty', () => {
    mockProps.pizzas = mockPizzas;
    wrapper = shallow(<PizzaList { ...mockProps } />);
    expect(wrapper.find('.pizza-list-container').exists()).to.be.true();
  })
})   

