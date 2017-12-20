import React, { Component } from 'react';
import { filterPizzas } from '../actions';
import { connect } from 'react-redux';

export class Filter extends Component {

  handleChange = e => {
    this.props.filterPizzas(e.target.value);
  }

  handleClickSort = () => {
    const sortObj = {reverse: true};
    this.props.sortPizzas(sortObj);
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

export default connect(null, { filterPizzas })(Filter);