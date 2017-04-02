import React from 'react';
import { connect } from 'react-redux';
import compose from 'lodash/fp/compose';

import { addProduct } from '../../actions/cart';
import ProductListItem from './ProductListItem';

const ProductListItemContainer = React.createClass({
  getInitialState() {
    return {
      quantity: 1,
    };
  },

  updateQuantity(quantity) {
    this.setState(() => ({ quantity }));
  },

  render() {
    const { quantity } = this.state;
    return React.createElement(ProductListItem, Object.assign(
      {},
      this.props,
      { quantity, updateQuantity: this.updateQuantity }
    ));
  },
});

const mapStateToProps = ({ cart }, { id }) => ({
  cartQuantity: (cart.find(p => p.id === id) || {}).quantity || 0,
});

const mapDispatchToProps = dispatch => ({
  addToCart: compose(dispatch, addProduct),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItemContainer);
