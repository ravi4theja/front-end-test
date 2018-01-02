import React, { Component } from 'react';
import { filterPizzas, sortPizzas } from '../actions';
import { connect } from 'react-redux';
import '../styles/main.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class Filter extends Component {

  handleInputFilterChange = e => {
    this.props.filterPizzas(e.target.value);
  }

  sortObj = {reverse: false};

  handleClickSort = () => {
    this.sortObj.reverse = !this.sortObj.reverse;
    this.props.sortPizzas(this.sortObj);
  }

  render() {
    return (
      <div className='nav'>
        <div className='filter'>
          <label>Filter</label>
          <TextField onChange={this.handleInputFilterChange} />
        </div>
        <RaisedButton className='btn-sort' onClick={this.handleClickSort} label='Sort' />
      </div>
    )
  }
}

export default connect(null, { filterPizzas, sortPizzas })(Filter);