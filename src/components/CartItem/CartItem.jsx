import React, { PropTypes } from 'react';
import { format } from 'currency-formatter';

import Button from '../Button';
import { getTotalPrice } from '../../libs/helpers';

import './CartItem.scss';

const CartItem = ({ id, name, price, promotion, quantity, removeProduct, updateQuantity }) => (
  <li className="CartItem">
    <img
      className="CartItem__image"
      src={`/assets/images/${name}.svg`}
      alt={name}
    />
    <div className="CartItem__name">{name}</div>
    <input
      className="CartItem__quantity"
      type="number"
      min="1"
      step="1"
      value={quantity}
      onChange={e => updateQuantity(id, parseInt(e.target.value, 10))}
    />
    <div className="CartItem__price CartItem__price--unit">
      {format(price, { symbol: '' })}
    </div>
    <div className="CartItem__price CartItem__price--total">
      {format(getTotalPrice(price, quantity, promotion), { symbol: '' })}
    </div>
    <Button
      className="CartItem__remove-button"
      onClick={() => removeProduct(id)}
      icon="delete"
    />
  </li>
);

CartItem.displayName = 'CartItem';

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  promotion: PropTypes.bool,
  // from container
  removeProduct: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
