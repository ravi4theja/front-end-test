import React, { Component } from 'react';
import Filter from './filter';
import PizzaList from './pizza-list';
export default class App extends Component {
  render() {
    return (
      <div>
        <Filter />
        <PizzaList />
      </div>
    )
  }
}