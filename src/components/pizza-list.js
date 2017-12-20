import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPizzas } from '../actions';

export class PizzaList extends Component {
  componentDidMount() {
    this.props.fetchPizzas();
  }

  renderPizzas() {
    return this.props.pizzas.map(pizza => {
      return <li key={this.props.pizzas.indexOf(pizza)}>{pizza}</li>
    })
  }

  render() {
    const loader = (
      <div>Loading...</div>
    )
    
    const pizzas = (
      <div className='pizza-list-container'>
        <ul>
          {this.renderPizzas()}
        </ul>
      </div>
    )
    
    return this.props.pizzas.length === 0? loader: pizzas;
  }
}

function mapStateToProps(state) {
  return {
    pizzas: state.pizzas
  }
}

export default connect(mapStateToProps, { fetchPizzas })(PizzaList);