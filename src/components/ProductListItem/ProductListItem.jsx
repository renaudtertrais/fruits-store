import React, { PropTypes } from 'react';
import { format } from 'currency-formatter';

import Button from '../Button';

import './ProductListItem.scss';

const renderPromotion = hasPromotion => {
  if (!hasPromotion) return null;
  return (
    <div className="ProductListItem__promotion">
      <div className="ProductListItem__promotion-text">BUY 2</div>
      <div className="ProductListItem__promotion-text">GET 1</div>
      <div className="ProductListItem__promotion-free">FREE</div>
    </div>
  );
};

const renderAddToCart = (id, quantity, addToCart, updateQuantity) => (
  <div className="ProductListItem__add-to-cart">
    <input
      className="ProductListItem__quantity"
      type="number"
      min="1"
      step="1"
      value={quantity}
      onChange={e => updateQuantity(parseInt(e.target.value, 10))}
    />
    <Button
      className="ProductListItem__add-to-cart-button"
      onClick={() => addToCart(id, quantity)}
      primary
    >
      Add <strong>{quantity}</strong> to cart
    </Button>
  </div>
);

const renderAddedToCart = quantity => (
  <Button className="ProductListItem__added-to-cart" disabled>
    {quantity} added to cart
  </Button>
);

const renderProductQuantity = (cartQuantity, id, quantity, addToCart, updateQuantity) => (
  cartQuantity
    ? renderAddedToCart(cartQuantity)
    : renderAddToCart(id, quantity, addToCart, updateQuantity)
);

const ProductListItem = ({
  id,
  name,
  price,
  promotion,
  quantity,
  addToCart,
  updateQuantity,
  cartQuantity,
}) => (
  <li key={id} className="ProductListItem">
    {renderPromotion(promotion)}
    <img
      className="ProductListItem__image"
      src={`/assets/images/${name}.svg`}
      alt={name}
    />
    <div className="ProductListItem__name">{name}</div>
    <div className="ProductListItem__price">{format(price, { code: 'CHF' })}</div>
    {renderProductQuantity(cartQuantity, id, quantity, addToCart, updateQuantity)}
  </li>
);

ProductListItem.displayName = 'ProductListItem';

ProductListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promotion: PropTypes.bool,
  // from container
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default ProductListItem;
