import React, { Component } from 'react';
import Filter from './filter';
import PizzaList from './pizza-list';
import '../styles/main.css';

const App = () => (

  <div className='main'>
    <Filter />
    <PizzaList />
  </div>

)

export default App;