import React from 'react';
import { connect } from 'react-redux';

import App from './App';

const AppContainer = React.createClass({
  getInitialState() {
    return {
      isCartOpen: false,
    };
  },

  toggleCart() {
    this.setState(({ isCartOpen }) => ({ isCartOpen: !isCartOpen }));
  },

  render() {
    const { isCartOpen } = this.state;
    return React.createElement(App, Object.assign({}, this.props, {
      isCartOpen,
      toggleCart: this.toggleCart,
    }));
  },
});

const mapStateToProps = ({ cart }) => ({
  cartLength: cart.length,
});

export default connect(mapStateToProps)(AppContainer);
