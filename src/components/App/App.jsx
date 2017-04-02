import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Cart from '../Cart';
import ProductList from '../ProductList';
import Button from '../Button';
import Icon from '../Icon';

import './App.scss';

const renderCart = isOpen => (
  isOpen
    ? <div className="App__cart"><Cart /></div>
    : null
);

const App = ({ isCartOpen, toggleCart, cartLength }) => (
  <div className={classnames('App', { 'App--with-cart': isCartOpen })}>
    <header className="App__header">
      <h1 className="App__title">Fruits Store</h1>
      <Button
        className={classnames('App__cart-button', { active: isCartOpen })}
        onClick={toggleCart}
      >
        <Icon name="cart" /> Cart ({cartLength})
      </Button>
    </header>
    <main className="App__main">
      <div className="App__product-list-container">
        <div className="App__product-list">
          <ProductList />
        </div>
      </div>
      {renderCart(isCartOpen)}
    </main>
  </div>
);

App.displayName = 'App';

App.propTypes = {
  // from container
  cartLength: PropTypes.number.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default App;
