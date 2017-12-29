import React from 'react';
import { expect } from 'code';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import * as actions from '../../src/actions';

import { Filter } from '../../src/components/filter';

describe('Filter component', () => {
  let wrapper;
  const mockFilterFunc = sinon.spy();
  const mockSortFunc = sinon.spy();
  const mockProps = {
     filterPizzas: mockFilterFunc,
     sortPizzas: mockSortFunc
  }

  beforeEach(() => {
    wrapper = shallow(<Filter { ...mockProps }/>)
  })

  it('should render Filter input', () => {
    expect(wrapper.find('.input-filter').exists()).to.be.true()
  })

  it('should call the props `filterPizzas` with the filter input when the user starts typing', () => {
    const filterTerm = 'i';
    wrapper.find('.input-filter').simulate('change', {target: {value: filterTerm}})
    expect(wrapper.instance().props.filterPizzas.calledWith(filterTerm)).to.be.true()
  })
  
  it('should render a sort button', () => {
    expect(wrapper.find('.btn-sort').exists()).to.be.true()
  })

  describe('when the sort button is clicked', () => {
    beforeEach(() => {
      wrapper.find('.btn-sort').simulate('click')
    })

    afterEach(() => {
      mockSortFunc.reset();
    })

    it('should call the props `sortPizzas` with the reverse property', () => {
      expect(wrapper.instance().props.sortPizzas.calledWith({reverse: true})).to.be.true();
    })
  })
})