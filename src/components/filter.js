import React, { Component } from 'react';
import { filterPizzas, sortPizzas } from '../actions';
import { connect } from 'react-redux';

export class Filter extends Component {

  handleChange = e => {
    this.props.filterPizzas(e.target.value);
  }

  sortObj = {reverse: false};

  handleClickSort = () => {
    this.sortObj.reverse = !this.sortObj.reverse;
    this.props.sortPizzas(this.sortObj);
  }

  render() {
    return (
      <div>
        <label>Filter</label>
        <input className='input-filter' onChange={this.handleChange}/>
        <button className='btn-sort'onClick={this.handleClickSort}>Sort</button>
      </div>
    )
  }
}

export default connect(null, { filterPizzas, sortPizzas })(Filter);