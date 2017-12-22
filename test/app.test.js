import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'code';
import { shallow } from 'enzyme';

import App from '../src/components/app';
import Filter from '../src/components/filter';
import PizzaList from '../src/components/pizza-list';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('is being rendered', () => {
    expect(wrapper.exists()).to.be.true();
  })

  it('should render connected `Filter` and `PizzaList` components', () => {
    console.log(wrapper.debug());
      expect(wrapper.containsAllMatchingElements([
      <Filter />,
      <PizzaList />
    ])).to.be.true();
  }) 
})