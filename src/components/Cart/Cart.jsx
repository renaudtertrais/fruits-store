import React, { PropTypes } from 'react';
import { format } from 'currency-formatter';

import CartItem from '../CartItem';
import Button from '../Button';
import { getTotalFormProducts } from '../../libs/helpers';

import './Cart.scss';

const Cart = ({ products }) => (
  <div className="Cart">
    <header className="Cart__header">
      <h2 className="Cart__title">Cart</h2>
      <div className="Cart__field-names">
        <div className="Cart__field-name">Name</div>
        <div className="Cart__field-quantity">Qty</div>
        <div className="Cart__field-unit-price">Unit price</div>
        <div className="Cart__field-total-price">Total price</div>
      </div>
    </header>
    <div className="Cart__list">
      {products.map(product => <CartItem key={product.id} {...product} />)}
    </div>
    <footer className="Cart__footer">
      <div className="Cart__total">
        <div className="Cart__total-title">TOTAL</div>
        <div className="Cart__total-value">
          {format(getTotalFormProducts(products), { code: 'CHF' })}
        </div>
      </div>
      <Button className="Cart__checkout-button" primary>
        Proceed to checkout
      </Button>
    </footer>
  </div>
);

Cart.displayName = 'Cart';

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
