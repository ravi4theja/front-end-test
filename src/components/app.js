import React, { Component } from 'react';
import Filter from './filter';
import PizzaList from './pizza-list';
import '../styles/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (

  <MuiThemeProvider>
    <div className='main'>
      <Filter />
      <PizzaList />
    </div>
  </MuiThemeProvider>
  
)

export default App;